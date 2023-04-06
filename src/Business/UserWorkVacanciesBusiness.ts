import { CreateUserWorkVacanciesInputDTO, CreateUserWorkVacanciesOutputDTO, DeleteUserWorkVacanciesInputDTO, EditUserWorkVacanciesInputDTO, GetAllUserWorkVacanciesInputDTO, GetAllUserWorkVacanciesOutputDTO, GetUserWorkVacanciesInputDTO, GetUserWorkVacanciesOutputDTO } from "../DTO/interfaceDTO/UserWorkVacanciesInterface";


import { UserProfileDataBase } from "../DataBase/UserProfileDataBase";
import { UserWorkVacanciesDataBase } from "../DataBase/UserWorkVacanciesDataBase";
import { WorkVacanciesDataBase } from "../DataBase/WorkVacanciesDataBase";
import { BadRequestError } from "../Errors/BadRequestError";
import { NotFoundError } from "../Errors/NotFoundError";
import { USER_ROLES } from "../Interfaces/Companie/Companie.Types";
import { UserWorkVacancies } from "../Models/Jobs/UserWorkVacanciesModel";

import { IdGenerator } from "../Services/IdGenerator";
import { TokenManager } from "../Services/TokenManager";
import { validateParam } from "../Utils/Validate";


export class UserWorkVacanciesBusiness {


    constructor(
        private userWorkVacanciesDataBase: UserWorkVacanciesDataBase,
        private workVacanciesDataBase: WorkVacanciesDataBase,
        private userProfileDataBase: UserProfileDataBase,
        private tokenManager: TokenManager,
        private idGenerator: IdGenerator
    ) { }

    public createUserWorkVancancies = async (input: CreateUserWorkVacanciesInputDTO): Promise<CreateUserWorkVacanciesOutputDTO> => {

        //pego o valor do input
        const {
            token,
            userProfileId,
            work_vacancy_id
        } = input


        //verifico a typagem

        validateParam("token", token, "string")
        validateParam("userProfileId", userProfileId, "string")
        validateParam("work_vacancy_id", work_vacancy_id, "string")


        console.log(userProfileId)
        const userProfile = await this.userProfileDataBase.findById(userProfileId)
        
        const workVacancies = await this.workVacanciesDataBase.findById(work_vacancy_id)
        const id = this.idGenerator.generate()
        const applied_at = new Date().toISOString()
        const chosen = 0
        //monto meu objeto


        const newUserWorkVacancies = new UserWorkVacancies(

            id,
            userProfileId,
            work_vacancy_id,
            workVacancies.company_id,
            chosen,
            applied_at,
            userProfile.first_name,
            userProfile.last_name,
            userProfile.phone_number,
            userProfile.address,
            userProfile.image,
            workVacancies.title,
            workVacancies.description,
            workVacancies.location,
            workVacancies.salary

        )

        //Modelo meu objeto e envio para o banco de dados

        const userWorkVacanciesDB = newUserWorkVacancies.userWorkVacanciesDB()
        await this.userWorkVacanciesDataBase.insert(userWorkVacanciesDB)



        //criou um objeto tipado

        const output: CreateUserWorkVacanciesOutputDTO = {
            mensage: "sucesso"
        }

        //retorno

        return output

    }


    public getUserWorkVacancies = async (input: GetUserWorkVacanciesInputDTO): Promise<GetUserWorkVacanciesOutputDTO> => {

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
        console.log(id)
        const userWorkVacanciesDB = await this.userWorkVacanciesDataBase.findById(id)

        if (!userWorkVacanciesDB) {
            throw new NotFoundError("usuário não encontrado");
        }


        console.log(userWorkVacanciesDB)


        const copyUserWorkVacancies = new UserWorkVacancies(

            userWorkVacanciesDB.id,
            userWorkVacanciesDB.userProfileId,
            userWorkVacanciesDB.work_vacancy_id,
            userWorkVacanciesDB.company_id,
            userWorkVacanciesDB.chosen,
            userWorkVacanciesDB.applied_at,
            userWorkVacanciesDB.first_name,
            userWorkVacanciesDB.last_name,
            userWorkVacanciesDB.phone_number,
            userWorkVacanciesDB.address,
            userWorkVacanciesDB.image,
            userWorkVacanciesDB.title,
            userWorkVacanciesDB.description,
            userWorkVacanciesDB.location,
            userWorkVacanciesDB.salary

        )

        if (!copyUserWorkVacancies) {
            throw new NotFoundError("usuário não encontrado")
        }


        const output: GetUserWorkVacanciesOutputDTO = copyUserWorkVacancies.toUserWorkVacanciesModel()

        return output
    }

    public getAllUserWorkVacancies = async (input: GetAllUserWorkVacanciesInputDTO): Promise<GetAllUserWorkVacanciesOutputDTO> => {

        const { token } = input

        if (!token) {
            throw new BadRequestError("token ausente")
        }

        const payload = this.tokenManager.verifyToken(token)

        if (!payload) {
            throw new BadRequestError("token inválido")
        }

        const user = await this.userWorkVacanciesDataBase.getAllUserWorkVacancies()

        const userWorkVacancies = await Promise.all(user.map(async userCopy => {
            return new UserWorkVacancies(
                userCopy.id,
                userCopy.userProfileId,
                userCopy.work_vacancy_id,
                userCopy.company_id,
                userCopy.chosen,
                userCopy.applied_at,
                userCopy.first_name,
                userCopy.last_name,
                userCopy.phone_number,
                userCopy.address,
                userCopy.image,
                userCopy.title,
                userCopy.description,
                userCopy.location,
                userCopy.salary
            ).toUserWorkVacanciesModel()
        }
        ))

        if (!user) {
            throw new NotFoundError("usuário não encontrado")
        }

        console.log(userWorkVacancies)
        const output: GetAllUserWorkVacanciesOutputDTO = userWorkVacancies
        
        return output
    }


    public editUserWorkVacancies = async (input: EditUserWorkVacanciesInputDTO): Promise<void> => {

        const {
            idToEdit,
            token,
            chosen

        } = input

        if (token === undefined) {
            throw new BadRequestError("token ausente")
        }

        const payload = this.tokenManager.getPayload(token)

        if (payload == null) {
            throw new BadRequestError("token invalido")
        }


        const userWorkVacanciesDB = await this.userWorkVacanciesDataBase.findById(idToEdit)

        if (!userWorkVacanciesDB) {
            throw new NotFoundError("Id não encontrado")
        }

        const copyUserWorkVacancies = new UserWorkVacancies(

            userWorkVacanciesDB.id,
            userWorkVacanciesDB.userProfileId,
            userWorkVacanciesDB.work_vacancy_id,
            userWorkVacanciesDB.company_id,
            userWorkVacanciesDB.chosen,
            userWorkVacanciesDB.applied_at,
            userWorkVacanciesDB.first_name,
            userWorkVacanciesDB.last_name,
            userWorkVacanciesDB.phone_number,
            userWorkVacanciesDB.address,
            userWorkVacanciesDB.image,
            userWorkVacanciesDB.title,
            userWorkVacanciesDB.description,
            userWorkVacanciesDB.location,
            userWorkVacanciesDB.salary

        )

        copyUserWorkVacancies.setChosen(chosen ? chosen : copyUserWorkVacancies.getChosen())

        const upUserWorkVacancies = copyUserWorkVacancies.userWorkVacanciesDB()

        await this.userWorkVacanciesDataBase.updateUserWorkVacancies(idToEdit, upUserWorkVacancies)
    }

    public deleteWorkVacancies = async (input: DeleteUserWorkVacanciesInputDTO): Promise<void> => {

        const { idToDelete, token } = input

        if (token === undefined) {
            throw new BadRequestError("token ausente")
        }

        const payload = this.tokenManager.getPayload(token)

        if (payload == null) {
            throw new BadRequestError("token invalido")
        }

        const userDB = await this.userWorkVacanciesDataBase.findById(idToDelete)

        if (!userDB) {
            throw new NotFoundError("Id não encontrado")
        }

        const creatorId = payload.id

        if (payload.role !== USER_ROLES.ADMIN && userDB.id !== creatorId) {
            throw new BadRequestError("Apenas o user criador da postagem ou ADM's podem deletar!")
        }


        await this.userWorkVacanciesDataBase.deleteUserWorkVacancies(idToDelete)
    }


}
