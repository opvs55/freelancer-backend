import {  UserWorkVacanciesModel } from "../../Interfaces/User/Users.Types"


//CreateJobVacancies

export interface CreateUserWorkVacanciesInputDTO {
    token: unknown
    userProfileId: string,
    work_vacancy_id: string
}

export interface CreateUserWorkVacanciesOutputDTO {
    mensage:string
}

//GET UserWork VACANCIES

export interface GetUserWorkVacanciesInputDTO {
    id:string,
    token: string | undefined
}


export interface GetAllUserWorkVacanciesInputDTO {  
    token: string | undefined
}

export type GetUserWorkVacanciesOutputDTO  = UserWorkVacanciesModel | void
export type GetAllUserWorkVacanciesOutputDTO = UserWorkVacanciesModel[] | void[]


//EDIT Work VACANCIES INFO

export interface EditUserWorkVacanciesInputDTO {
    token: string | undefined,
    idToEdit: string,
    chosen: number
}

export interface EditUserWorkVacanciesOutputDTO{
    mensage:string
}



//DELETAR COMPANY

export interface DeleteUserWorkVacanciesInputDTO {
    idToDelete: string,
    token: string | undefined
}

export interface DeleteUserWorkVacanciesOutputDTO{
    mensage:string
}
