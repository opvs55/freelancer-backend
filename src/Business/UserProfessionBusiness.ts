import {
    CreateUserProfessionInputDTO,
    CreateUserProfessionOutputDTO,
    DeleteUserProfessionInputDTO,
    EditUserProfessionInputDTO,
    GetAllUserProfessionInputDTO,
    GetAllUserProfessionOutputDTO,
    GetUserProfessionInputDTO,
    GetUserProfessionOutputDTO
} from "../DTO/interfaceDTO/UserProfessionInterface";
import { CreateUserProfileOutputDTO } from "../DTO/interfaceDTO/UserProfileInterface";
import { UserProfessionDataBase } from "../DataBase/UserProfessionDataBase";
import { BadRequestError } from "../Errors/BadRequestError";
import { NotFoundError } from "../Errors/NotFoundError";
import { USER_ROLES } from "../Interfaces/Companie/Companie.Types";
import { UserProfession } from "../Models/Users/UserProfessions";
import { IdGenerator } from "../Services/IdGenerator";
import { TokenManager } from "../Services/TokenManager";
import { validateParam } from "../Utils/Validate";


export class UserProfessionBusiness {


    constructor(
        private userProfessionDataBase: UserProfessionDataBase,
        private tokenManager: TokenManager,
        private idGenerator: IdGenerator
    ) { }

    public createProfession = async (input: CreateUserProfessionInputDTO): Promise<CreateUserProfessionOutputDTO> => {

        //pego o valor do input
        const {
            token,
            user_id,
            profession_id,
            experience_years
        } = input


        //verifico a typagem
        console.log(user_id)
        validateParam("token", token, "string")
        validateParam("user_id", user_id, "string")
        validateParam("profession_id", profession_id, "string")
        validateParam("experience_years", experience_years, "string")



        const id = this.idGenerator.generate()
        //monto meu objeto

        const newUserProfession = new UserProfession(
            id,
            user_id,
            profession_id,
            experience_years
        )

        //Modelo meu objeto e envio para o banco de dados

        const userProfessionDB = newUserProfession.userProfessionToDB()
        await this.userProfessionDataBase.insert(userProfessionDB)



        //criou um objeto tipado

        const output: CreateUserProfileOutputDTO = { mensage: "Cadastro feito com sucesso" }

        //retorno

        return output

    }


    public getUserProfession = async (input: GetUserProfessionInputDTO): Promise<GetUserProfessionOutputDTO> => {

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

        const user = await this.userProfessionDataBase.getUserProfession(id)

        if (!user) {
            throw new NotFoundError("usuário não encontrado")
        }


        const output: GetUserProfessionOutputDTO = user

        return output
    }

    public getAllUserProfession = async (input: GetAllUserProfessionInputDTO): Promise<GetAllUserProfessionOutputDTO> => {

        const { token } = input

        if (!token) {
            throw new BadRequestError("token ausente")
        }

        const payload = this.tokenManager.verifyToken(token)

        if (!payload) {
            throw new BadRequestError("token inválido")
        }

        const user = await this.userProfessionDataBase.getAllUserProfession()

        if (!user) {
            throw new NotFoundError("usuário não encontrado")
        }


        const output: GetAllUserProfessionOutputDTO = user

        return output
    }


    public editUserProfession = async (input: EditUserProfessionInputDTO): Promise<void> => {

        const {
            idToEdit,
            token,
            experience_years

        } = input

        if (token === undefined) {
            throw new BadRequestError("token ausente")
        }

        const payload = this.tokenManager.getPayload(token)

        if (payload == null) {
            throw new BadRequestError("token invalido")
        }


        const userProfessionDB = await this.userProfessionDataBase.findById(idToEdit)

        if (!userProfessionDB) {
            throw new NotFoundError("Id não encontrado")
        }


        const userProfessionEditada = new UserProfession(
            userProfessionDB.id,
            userProfessionDB.user_id,
            userProfessionDB.profession_id,
            userProfessionDB.experience_years
        )

        validateParam("token", token, "string")
        validateParam("experience_years", experience_years, "string")

        userProfessionEditada.setExperienceYear(experience_years? experience_years: userProfessionEditada.getExperienceYear());

        const upuserProfessionDB = userProfessionEditada.userProfessionToDB()

        await this.userProfessionDataBase.updateUserProfession(idToEdit, upuserProfessionDB)
    }

    public deleteUserProfession = async (input: DeleteUserProfessionInputDTO): Promise<void> => {

        const { idToDelete, token } = input

        if (token === undefined) {
            throw new BadRequestError("token ausente")
        }

        const payload = this.tokenManager.getPayload(token)

        if (payload == null) {
            throw new BadRequestError("token invalido")
        }

        const userDB = await this.userProfessionDataBase.findById(idToDelete)

        if (!userDB) {
            throw new NotFoundError("Id não encontrado")
        }

        const creatorId = payload.id

        if (payload.role !== USER_ROLES.ADMIN && userDB.user_id !== creatorId) {
            throw new BadRequestError("Apenas o user criador da postagem ou ADM's podem deletar!")
        }


        await this.userProfessionDataBase.deleteUserProfession(idToDelete)
    }


}
