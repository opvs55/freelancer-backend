import { CreateUserWorkVacanciesInputDTO, CreateUserWorkVacanciesOutputDTO, DeleteUserWorkVacanciesInputDTO, EditUserWorkVacanciesInputDTO, GetAllUserWorkVacanciesInputDTO, GetAllUserWorkVacanciesOutputDTO, GetUserWorkVacanciesInputDTO, GetUserWorkVacanciesOutputDTO } from "../DTO/interfaceDTO/UserWorkVacanciesInterface";
import { CompanieProfileDataBase } from "../DataBase/CompanieProfileDataBase";
import { UserProfessionDataBase } from "../DataBase/UserProfessionDataBase";


import { UserProfileDataBase } from "../DataBase/UserProfileDataBase";
import { UserWorkVacanciesDataBase } from "../DataBase/UserWorkVacanciesDataBase";
import { WorkVacanciesDataBase } from "../DataBase/WorkVacanciesDataBase";
import { BadRequestError } from "../Errors/BadRequestError";
import { NotFoundError } from "../Errors/NotFoundError";
import { UserWorkVacancies } from "../Models/Jobs/UserWorkVacanciesModel";

import { IdGenerator } from "../Services/IdGenerator";
import { TokenManager } from "../Services/TokenManager";
import { validateParam } from "../Utils/Validate";


export class UserWorkVacanciesBusiness {


    constructor(
        private userWorkVacanciesDataBase: UserWorkVacanciesDataBase,
        private workVacanciesDataBase: WorkVacanciesDataBase,
        private userProfessionDataBase: UserProfessionDataBase,
        private userProfileDataBase: UserProfileDataBase,
        private companieProfileDataBase: CompanieProfileDataBase,
        private tokenManager: TokenManager,
        private idGenerator: IdGenerator
    ) { }

    public createUserWorkVancancies = async (input: CreateUserWorkVacanciesInputDTO): Promise<CreateUserWorkVacanciesOutputDTO> => {

        //pego o valor do input
        const {
            token,
            user_id,
            work_vacancy_id,
            companie_id
        } = input


        //verifico a typagem

        validateParam("token", token, "string")
        validateParam("user_id", user_id, "string")
        validateParam("work_vacancy_id", work_vacancy_id, "string")
        validateParam("companie_id", companie_id, "string")


        const userProfile = await this.userProfileDataBase.findByUserIdWithNoSkills(user_id)

        const workVacancies = await this.workVacanciesDataBase.findById(work_vacancy_id)

        const companie = await this.companieProfileDataBase.findByCompanieId(companie_id) 

        const userProfession = await this.userProfessionDataBase.findByUserId(user_id)

        //pegando valores para construção do objeto

        const id = this.idGenerator.generate()
        const applied_at = new Date().toISOString()
        const chosen = 0


        //monto meu objeto


        const newUserWorkVacancies = new UserWorkVacancies(

            id,
            user_id,
            work_vacancy_id,
            companie_id,
            chosen,
            applied_at,
            companie,
            userProfile,
            workVacancies,
            userProfession
        )

        //Modelo meu objeto e envio para o banco de dados

        const userWorkVacanciesDB = newUserWorkVacancies.userWorkVacanciesDB()



        // verifica se já existe um registro.

        //preciso criar uma lógica que verifica e altera o chosen para 0 se caso ele for 1

        const userWorkVacanciesAlreadyExist = await this.userWorkVacanciesDataBase.findByUserId(user_id);

        for (const userWork of userWorkVacanciesAlreadyExist) {
            if (userWork.work_vacancy_id === work_vacancy_id) {
                return { mensage: "Registro já existente" };
            }
        }

        await this.userWorkVacanciesDataBase.insert(userWorkVacanciesDB);
        return { mensage: "Registro criado com sucesso" };


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

        const userWorkVacanciesDB = await this.userWorkVacanciesDataBase.findById(id)



        if (!userWorkVacanciesDB) {
            throw new NotFoundError("usuário não encontrado");
        }


        const skills = await this.userProfessionDataBase.findByUserId(userWorkVacanciesDB.user_id)

        const workVacancies = await this.workVacanciesDataBase.findById(userWorkVacanciesDB.work_vacancy_id)

        const userProfile = await this.userProfileDataBase.findByUserIdWithNoSkills(userWorkVacanciesDB.user_id)

        const companie = await this.companieProfileDataBase.findByCompanieId(userWorkVacanciesDB.companie_id)

        const copyUserWorkVacancies = new UserWorkVacancies(

            userWorkVacanciesDB.id,
            userWorkVacanciesDB.user_id,
            userWorkVacanciesDB.work_vacancy_id,
            userWorkVacanciesDB.companie_id,
            userWorkVacanciesDB.chosen,
            userWorkVacanciesDB.applied_at,
            companie,
            userProfile,
            workVacancies,
            skills

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


            const skills = await this.userProfessionDataBase.findByUserId(userCopy.user_id)

            const workVacancies = await this.workVacanciesDataBase.findById(userCopy.work_vacancy_id)

            const userProfile = await this.userProfileDataBase.findByUserIdWithNoSkills(userCopy.user_id)

            const companie = await this.companieProfileDataBase.findByCompanieId(userCopy.companie_id)

            return new UserWorkVacancies(

                userCopy.id,
                userCopy.user_id,
                userCopy.work_vacancy_id,
                userCopy.companie_id,
                userCopy.chosen,
                userCopy.applied_at,
                companie,
                userProfile,
                workVacancies,
                skills

            ).toUserWorkVacanciesModel()
        }
        ))


        if (!user) {
            throw new NotFoundError("usuário não encontrado")
        }




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

        const skills = await this.userProfessionDataBase.findByUserId(userWorkVacanciesDB.user_id)

        const workVacancies = await this.workVacanciesDataBase.findById(userWorkVacanciesDB.work_vacancy_id)

        const userProfile = await this.userProfileDataBase.findByUserIdWithNoSkills(userWorkVacanciesDB.user_id)

        const companie = await this.companieProfileDataBase.findByCompanieId(userWorkVacanciesDB.companie_id)

        const copyUserWorkVacancies = new UserWorkVacancies(

            userWorkVacanciesDB.id,
            userWorkVacanciesDB.user_id,
            userWorkVacanciesDB.work_vacancy_id,
            userWorkVacanciesDB.companie_id,
            userWorkVacanciesDB.chosen,
            userWorkVacanciesDB.applied_at,
            companie,
            userProfile,
            workVacancies,
            skills
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

        //         const creatorId = payload.id

        //         if (payload.role !== USER_ROLES.ADMIN && userDB.id !== creatorId) {
        //             throw new BadRequestError("Apenas o user criador da postagem ou ADM's podem deletar!")
        //         }


        await this.userWorkVacanciesDataBase.deleteUserWorkVacancies(idToDelete)
    }


}
