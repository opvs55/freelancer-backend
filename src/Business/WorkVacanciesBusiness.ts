import {
    CreateWorkVacanciesInputDTO,
    CreateWorkVacanciesOutputDTO,
    DeleteWorkVacanciesInputDTO,
    EditWorkVacanciesInputDTO,
    GetWorkVacanciesByIdInputDTO,
    GetWorkVacanciesByIdOutputDTO,
    GetWorkVacanciesInputDTO,
    GetWorkVacanciesOutputDTO
} from "../DTO/interfaceDTO/WorkVacanciesInterface";
import { WorkVacanciesDataBase } from "../DataBase/WorkVacanciesDataBase";
import { BadRequestError } from "../Errors/BadRequestError";
import { NotFoundError } from "../Errors/NotFoundError";
import { USER_ROLES } from "../Interfaces/Companie/Companie.Types";
import { WorkVacancies } from "../Models/Jobs/WorkVacanciesModel";

import { IdGenerator } from "../Services/IdGenerator";
import { TokenManager } from "../Services/TokenManager";
import { validateParam } from "../Utils/Validate";


export class WorkVacanciesBusiness {


    constructor(
        private workVacanciesDataBase: WorkVacanciesDataBase,
        private tokenManager: TokenManager,
        private idGenerator: IdGenerator
    ) { }

    public createWorkVancancies = async (input: CreateWorkVacanciesInputDTO): Promise<CreateWorkVacanciesOutputDTO> => {

        //pego o valor do input
        const {
            token,
            company_id,
            title,
            description,
            skills_required,
            location,
            salary
        } = input


        //verifico a typagem

        validateParam("token", token, "string")
        validateParam("company_id", company_id, "string")
        validateParam("title", title, "string")
        validateParam("description", description, "string")
        validateParam("skills_required", skills_required, "string")
        validateParam("location", location, "string")
        validateParam("salary", salary, "number")



        const id = this.idGenerator.generate()
        const createdAt = new Date().toISOString()
        //monto meu objeto

        const newWorkVacancies = new WorkVacancies(

            id,
            company_id,
            title,
            description,
            skills_required,
            location,
            salary,
            createdAt

        )

        //Modelo meu objeto e envio para o banco de dados

        const workVacanciesDB = newWorkVacancies.WorkVacanciesDB()
        await this.workVacanciesDataBase.insert(workVacanciesDB)



        //criou um objeto tipado

        const output: CreateWorkVacanciesOutputDTO = {
            mensage: "sucesso"
        }

        //retorno

        return output

    }


    public getWorkVacancies = async (input: GetWorkVacanciesByIdInputDTO): Promise<GetWorkVacanciesByIdOutputDTO> => {

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

        const user = await this.workVacanciesDataBase.getWorkVacancies(id)

        if (!user) {
            throw new NotFoundError("usuário não encontrado")
        }


        const output: GetWorkVacanciesByIdOutputDTO = user

        return output
    }

    public getAllWorkVacancies= async (input: GetWorkVacanciesInputDTO): Promise<GetWorkVacanciesOutputDTO> => {

        const { token } = input

        if (!token) {
            throw new BadRequestError("token ausente")
        }

        const payload = this.tokenManager.verifyToken(token)

        if (!payload) {
            throw new BadRequestError("token inválido")
        }

        const user = await this.workVacanciesDataBase.getAllWorkVacancies()

        if (!user) {
            throw new NotFoundError("usuário não encontrado")
        }


        const output: GetWorkVacanciesOutputDTO = user

        return output
    }


    public editWorkVacancies = async (input: EditWorkVacanciesInputDTO): Promise<void> => {

        const {
            idToEdit,
            token,
            title,
            description,
            skills_required,
            location,
            salary

        } = input

        if (token === undefined) {
            throw new BadRequestError("token ausente")
        }

        const payload = this.tokenManager.getPayload(token)

        if (payload == null) {
            throw new BadRequestError("token invalido")
        }


        const workVacanciesDB = await this.workVacanciesDataBase.findById(idToEdit)

        if (!workVacanciesDB) {
            throw new NotFoundError("Id não encontrado")
        }


        const workVacanciesEditada = new WorkVacancies(
            workVacanciesDB.id,
            workVacanciesDB.company_id,
            workVacanciesDB.title,
            workVacanciesDB.description,
            workVacanciesDB.skills_required,
            workVacanciesDB.location,
            workVacanciesDB.salary,
            workVacanciesDB.created_at

        )

        workVacanciesEditada.setTitle(title ? title : workVacanciesEditada.getTitle())
        workVacanciesEditada.setDescription(description ? description : workVacanciesEditada.getDescription())
        workVacanciesEditada.setskillsRequired(skills_required ? skills_required : workVacanciesEditada.getskillsRequired())
        workVacanciesEditada.setLocation(location ? location : workVacanciesEditada.getLocation())
        workVacanciesEditada.setSalary(salary ? salary : workVacanciesEditada.getSalary())





        const upWorkVacancies = workVacanciesEditada.WorkVacanciesDB()

        await this.workVacanciesDataBase.updateWorkVacancies(idToEdit, upWorkVacancies)
    }

    public deleteWorkVacancies = async (input: DeleteWorkVacanciesInputDTO): Promise<void> => {

        const { idToDelete, token } = input

        if (token === undefined) {
            throw new BadRequestError("token ausente")
        }

        const payload = this.tokenManager.getPayload(token)

        if (payload == null) {
            throw new BadRequestError("token invalido")
        }

        const userDB = await this.workVacanciesDataBase.findById(idToDelete)

        if (!userDB) {
            throw new NotFoundError("Id não encontrado")
        }

        const creatorId = payload.id

        if (payload.role !== USER_ROLES.ADMIN && userDB.company_id !== creatorId) {
            throw new BadRequestError("Apenas o user criador da postagem ou ADM's podem deletar!")
        }


        await this.workVacanciesDataBase.deleteWorkVacancies(idToDelete)
    }


}
