import { WorkVacanciesModel } from "../../Interfaces/Companie/Companie.types"



//CreateJobVacancies

export interface CreateWorkVacanciesInputDTO {
    token: unknown,
    title: unknown,
    description: unknown,
    skills_required: unknown,
    location: unknown,
    salary:unknown
}

export interface CreateWorkVacanciesOutputDTO {
    token: string
}

//GET Work VACANCIES

export interface GetWorkVacanciesInputDTO {
    token: string | undefined
}

export type GetWorkVacanciesOutputDTO = WorkVacanciesModel[]


// GET Work VACANCIES BY ID

export interface GetWorkVacanciesByIdInputDTO {
    token: string | undefined
    id:string
}

export type GetWorkVacanciesByIdOutputDTO = WorkVacanciesModel

//EDIT Work VACANCIES INFO

export interface EditWorkVacanciesInputDTO {
    token: unknown,
    title: unknown,
    description: unknown,
    skills_required: unknown,
    location: unknown,
    salary:unknown
}

export interface EditWorkVacanciesOutputDTO{
    mensage:string
}


//DELETAR COMPANY

export interface DeleteWorkVacanciesInputDTO {
    idToDelete: string,
    token: string | undefined
}

export interface DeleteWorkVacanciesOutputDTO{
    mensage:string
}
