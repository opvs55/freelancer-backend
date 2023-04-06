import { WorkVacanciesDB, WorkVacanciesModel } from "../../Interfaces/Companie/Companie.Types"



//CreateJobVacancies

export interface CreateWorkVacanciesInputDTO {
    token: string | undefined,
    company_id: string,
    title: string,
    description: string,
    skills_required: string,
    location: string,
    salary:number
}

export interface CreateWorkVacanciesOutputDTO {
    mensage: string
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
    token: string | undefined,
    idToEdit: string,
    title: string,
    description: string,
    skills_required: string,
    location: string,
    salary:number
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
