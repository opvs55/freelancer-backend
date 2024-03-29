import {
    CreateUserProfileInputDTO,
    CreateUserProfileOutputDTO,
    DeleteUserProfileInputDTO,
    EditUserProfileInputDTO,
    GetUserProfileByUserIdInputDTO,
    GetUserProfileByUserIdOutputDTO,
    GetUserProfileInputDTO,
    GetUserProfileOutputDTO
} from "../DTO/interfaceDTO/UserProfileInterface";

import { UserProfessionDataBase } from "../DataBase/UserProfessionDataBase";
import { UserProfileDataBase } from "../DataBase/UserProfileDataBase";
import { BadRequestError } from "../Errors/BadRequestError";
import { NotFoundError } from "../Errors/NotFoundError";
import { USER_ROLES } from "../Interfaces/Companie/Companie.types";
import { UsersProfiles } from "../Models/Users/UserProfileModel";
import { IdGenerator } from "../Services/IdGenerator";
import { TokenManager } from "../Services/TokenManager";
import { validateParam } from "../Utils/Validate";


export class UserProfileBusiness {


    constructor(
        private userProfileDataBase: UserProfileDataBase,
        private userProfessionDataBase: UserProfessionDataBase,
        private tokenManager: TokenManager,
        private idGenerator: IdGenerator
    ) { }

    public createProfile = async (input: CreateUserProfileInputDTO): Promise<CreateUserProfileOutputDTO> => {

        //pego o valor do input
        const {
            token,
            user_id,
            first_name,
            last_name,
            address,
            phone_number,
            bio,
            image
        } = input


        //verifico a typagem


        validateParam("token", token, "string")
        validateParam("user_id", user_id, "string")
        validateParam("first_name", first_name, "string")
        validateParam("last_name", last_name, "string")
        validateParam("address", address, "string")
        validateParam("phone_number", phone_number, "string")
        validateParam("bio", bio, "string")
        validateParam("image", image, "string")


        const id = this.idGenerator.generate()
        //monto meu objeto


        const skills = await this.userProfessionDataBase.findByUserId(user_id)
        const skillsArray: any[] = []

        skills.map(skill => {
            skillsArray.push(skill)
        })

        console.log(skillsArray)

        const newUserProfile = new UsersProfiles(
            id,
            user_id,
            first_name,
            last_name,
            address,
            phone_number,
            bio,
            skillsArray,
            image
        )

        //Modelo meu objeto e envio para o banco de dados

        const userProfileDB = newUserProfile.userProfileToDB()


        const userProfileAlreadyExist = await this.userProfileDataBase.findByUserId(user_id)


        if (userProfileAlreadyExist) {
            const output: CreateUserProfileOutputDTO = { mensage: "Profile já existente" }
            return output
        } else {
            await this.userProfileDataBase.insert(userProfileDB)
            const output: CreateUserProfileOutputDTO = { mensage: "profile criado com sucesso" }
            return output
        }

    }


    public getUserProfile = async (input: GetUserProfileInputDTO): Promise<GetUserProfileOutputDTO> => {

        const { token, id } = input

        if (!token) {
            throw new BadRequestError("token ausente")
        }

        if (!id) {
            throw new BadRequestError("id ausente")
        }

        const payload = this.tokenManager.verifyToken(token)

        if (!payload) {
            throw new BadRequestError("token inválido")
        }

        const user = await this.userProfileDataBase.getUserProfile(id)

        if (!user) {
            throw new NotFoundError("usuário não encontrado")
        }


        const output: GetUserProfileOutputDTO = user

        return output
    }

    public getUserProfileByUserID = async (input: GetUserProfileByUserIdInputDTO): Promise<GetUserProfileByUserIdOutputDTO> => {

        const { token, user_id } = input

        if (!token) {
            throw new BadRequestError("token ausente")
        }

        if (!user_id) {
            throw new BadRequestError("id ausente")
        }

        const payload = this.tokenManager.verifyToken(token)

        if (!payload) {
            throw new BadRequestError("token inválido")
        }

        const user = await this.userProfileDataBase.findByUserId(user_id)
        const skills = await this.userProfessionDataBase.findByUserId(user_id)

        const copyUser = new UsersProfiles(
            user.id,
            user.user_id,
            user.first_name,
            user.last_name,
            user.address,
            user.phone_number,
            user.bio,
            skills,
            user.image
        )

        if (!user) {
            throw new NotFoundError("usuário não encontrado")
        }


        const output: GetUserProfileOutputDTO = copyUser

        return output
    }

    public editUserProfile = async (input: EditUserProfileInputDTO): Promise<void> => {

        const {
            idToEdit,
            token,
            first_name,
            last_name,
            address,
            phone_number,
            bio,
            image
        } = input

        if (token === undefined) {
            throw new BadRequestError("token ausente")
        }

        const payload = this.tokenManager.getPayload(token)

        if (payload == null) {
            throw new BadRequestError("token invalido")
        }


        const userProfileDB = await this.userProfileDataBase.findById(idToEdit)

        if (!userProfileDB) {
            throw new NotFoundError("Id não encontrado")
        }

        const skills = await this.userProfessionDataBase.findByUserId(userProfileDB.user_id)

        const userProfileEditada = new UsersProfiles(
            userProfileDB.id,
            userProfileDB.user_id,
            userProfileDB.first_name,
            userProfileDB.last_name,
            userProfileDB.address,
            userProfileDB.phone_number,
            userProfileDB.bio,
            skills,
            userProfileDB.image
        )

        userProfileEditada.setFirstName(first_name ? first_name : userProfileEditada.getFirstName());
        console.log(userProfileEditada.getLastName())
        userProfileEditada.setLastName(last_name ? last_name : userProfileEditada.getLastName());
        userProfileEditada.setAddress(address ? address : userProfileEditada.getAddress());
        userProfileEditada.setPhoneNumber(phone_number ? phone_number : userProfileEditada.getPhoneNumber());
        userProfileEditada.setBio(bio ? bio : userProfileEditada.getBio());
        userProfileEditada.setImage(image ? image : userProfileEditada.getImage());




        const upUserProfileDB = userProfileEditada.userProfileToDB()

        await this.userProfileDataBase.updateUserProfile(idToEdit, upUserProfileDB)
    }

    public deleteUserProfile = async (input: DeleteUserProfileInputDTO): Promise<void> => {

        const { idToDelete, token } = input

        if (token === undefined) {
            throw new BadRequestError("token ausente")
        }

        const payload = this.tokenManager.getPayload(token)

        if (payload == null) {
            throw new BadRequestError("token invalido")
        }

        const userDB = await this.userProfileDataBase.findById(idToDelete)

        if (!userDB) {
            throw new NotFoundError("Id não encontrado")
        }

        const creatorId = payload.id

        if (payload.role !== USER_ROLES.ADMIN && userDB.user_id !== creatorId) {
            throw new BadRequestError("Apenas o user criador da postagem ou ADM's podem deletar!")
        }


        await this.userProfileDataBase.deleteUserUserProfile(idToDelete)
    }


}
