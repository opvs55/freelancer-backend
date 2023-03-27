import { jobVacanciesModel } from "../../Interfaces/companies/companies.types"



//CreateJobVacancies

export interface CreateJobVacanciesInputDTO {
    token: unknown,
    title: unknown,
    description: unknown,
    skills_required: unknown,
    location: unknown,
    salary:unknown
}

export interface CreateJobVacanciesOutputDTO {
    token: string
}

//GET JOB VACANCIES

export interface GetJobVacanciesInputDTO {
    token: string | undefined
}

export type GetJobVacanciesOutputDTO = jobVacanciesModel[]


// GET JOB VACANCIES BY ID

export interface GetJobVacanciesByIdInputDTO {
    token: string | undefined
    id:string
}

export type GetJobVacanciesByIdOutputDTO = jobVacanciesModel

//EDIT JOB VACANCIES INFO

export interface EditJobVacanciesInputDTO {
    token: unknown,
    title: unknown,
    description: unknown,
    skills_required: unknown,
    location: unknown,
    salary:unknown
}

export interface EditJobVacanciesOutputDTO{
    mensage:string
}


//DELETAR COMPANY

export interface DeleteJobVacanciesInputDTO {
    idToDelete: string,
    token: string | undefined
}

export interface DeleteJobVacanciesOutputDTO{
    mensage:string
}
