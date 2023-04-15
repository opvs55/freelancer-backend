
import {
    CreateCompanieProfileInputDTO,
    CreateCompanieProfileOutputDTO,
    DeleteCompanieProfileInputDTO,
    EditCompanieProfileInputDTO,
    GetAllCompanieProfileInputDTO,
    GetAllCompanieProfileOutputDTO,
    GetCompanieProfileInputDTO,
    GetCompanieProfileOutputDTO
} from "../DTO/interfaceDTO/CompanieProfileInterface";


import { CompanieProfileDataBase } from "../DataBase/CompanieProfileDataBase";

import { BadRequestError } from "../Errors/BadRequestError";
import { NotFoundError } from "../Errors/NotFoundError";
import { USER_ROLES } from "../Interfaces/Companie/Companie.types";
import { CompanieProfiles } from "../Models/Companie/CompanieProfileModel";
import { IdGenerator } from "../Services/IdGenerator";
import { TokenManager } from "../Services/TokenManager";
import { validateParam } from "../Utils/Validate";


export class CompanieProfileBusiness {


    constructor(
        private companieProfileDataBase: CompanieProfileDataBase,
        private tokenManager: TokenManager,
        private idGenerator: IdGenerator
    ) { }

    public createProfile = async (input: CreateCompanieProfileInputDTO): Promise<CreateCompanieProfileOutputDTO> => {

        //pego o valor do input
        const {
            token,
            companie_id,
            name,
            description,
            address,
            phone_number
        } = input


        //verifico a typagem


        validateParam("token", token, "string")
        validateParam("companie_id", companie_id, "string")
        validateParam("name", name, "string")
        validateParam("description", description, "string")
        validateParam("address", address, "string")
        validateParam("phone_number", phone_number, "string")


        const id = this.idGenerator.generate()
        const image = "padrão"
        //monto meu objeto

        const newCompanieProfile = new CompanieProfiles(
            id,
            companie_id,
            name,
            description,
            address,
            phone_number,
            image
        )

        //Modelo meu objeto e envio para o banco de dados

        const companieProfileDB = newCompanieProfile.companieProfileToDB()



        const companieProfileAlreadyExist = await this.companieProfileDataBase.findByCompanieId(companie_id)

        if(companieProfileAlreadyExist){
            const output: CreateCompanieProfileOutputDTO = { mensage: "Profile já existente"}
            return output
        } else {
        await this.companieProfileDataBase.insert(companieProfileDB)
        const output: CreateCompanieProfileOutputDTO = { mensage: "profile criado com sucesso" }
        return output
        }


    }


    public getCompanieProfile = async (input: GetCompanieProfileInputDTO): Promise<GetCompanieProfileOutputDTO> => {

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

        const companieProfile = await this.companieProfileDataBase.findById(id)

        if (!companieProfile) {
            throw new NotFoundError("usuário não encontrado")
        }



        const output: GetCompanieProfileOutputDTO = companieProfile

        return output
    }


    public getAllUserProfile = async (input: GetAllCompanieProfileInputDTO): Promise<GetAllCompanieProfileOutputDTO> => {

        const { token } = input

        if (!token) {
            throw new BadRequestError("token ausente")
        }



        const payload = this.tokenManager.verifyToken(token)

        if (!payload) {
            throw new BadRequestError("token inválido")
        }

        const user = await this.companieProfileDataBase.getAllCompanieProfile()

        if (!user) {
            throw new NotFoundError("usuário não encontrado")
        }


        const output: GetAllCompanieProfileOutputDTO = user

        return output
    }

    public editUserProfile = async (input: EditCompanieProfileInputDTO): Promise<void> => {

        const {
            idToEdit,
            token,
            name,
            description,
            address,
            phone_number,
            image
        } = input

        if (token === undefined) {
            throw new BadRequestError("token ausente")
        }

        const payload = this.tokenManager.getPayload(token)

        if (payload == null) {
            throw new BadRequestError("token invalido")
        }


        const companieProfileDB = await this.companieProfileDataBase.findById(idToEdit)

        if (!companieProfileDB) {
            throw new NotFoundError("Id não encontrado")
        }


        const companieProfileEditada = new CompanieProfiles(
            companieProfileDB.id,
            companieProfileDB.companie_id,
            companieProfileDB.name,
            companieProfileDB.description,
            companieProfileDB.address,
            companieProfileDB.phone_number,
            companieProfileDB.image
        )

        companieProfileEditada.setName(name ? name : companieProfileEditada.getName());
        companieProfileEditada.setDescription(description ? description : companieProfileEditada.getDescription());
        companieProfileEditada.setAddress(address ? address : companieProfileEditada.getAddress());
        companieProfileEditada.setPhoneNumber(phone_number ? phone_number : companieProfileEditada.getPhoneNumber());
        companieProfileEditada.setImage(image ? image : companieProfileEditada.getImage());




        const upCompanieProfileDB = companieProfileEditada.companieProfileToDB()

        await this.companieProfileDataBase.updateCompanieProfile(idToEdit, upCompanieProfileDB)
    }

    public deleteUserProfile = async (input: DeleteCompanieProfileInputDTO): Promise<void> => {

        const { idToDelete, token } = input

        if (token === undefined) {
            throw new BadRequestError("token ausente")
        }

        const payload = this.tokenManager.getPayload(token)

        if (payload == null) {
            throw new BadRequestError("token invalido")
        }

        const companieDB = await this.companieProfileDataBase.findById(idToDelete)

        if (!companieDB) {
            throw new NotFoundError("Id não encontrado")
        }

        const creatorId = payload.id

        if (payload.role !== USER_ROLES.ADMIN && companieDB.companie_id !== creatorId) {
            throw new BadRequestError("Apenas o user criador da postagem ou ADM's podem deletar!")
        }


        await this.companieProfileDataBase.deleteCompanieProfile(idToDelete)
    }


}
