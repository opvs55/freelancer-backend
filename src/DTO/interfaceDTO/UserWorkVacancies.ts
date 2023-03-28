import { UserWorkVacanciesModel } from "../../Interfaces/User/Users.type"


//CreateJobVacancies

export interface CreateUserWorkVacanciesInputDTO {
    token: unknown,
}

export interface CreateUserWorkVacanciesOutputDTO {
    mensagem:string
}

//GET UserWork VACANCIES

export interface GetUserWorkVacanciesInputDTO {
    id:string,
    token: string | undefined
}

export type GetUserWorkVacanciesOutputDTO = UserWorkVacanciesModel[]



//DELETAR COMPANY

export interface DeleteUserWorkVacanciesInputDTO {
    idToDelete: string,
    token: string | undefined
}

export interface DeleteUserWorkVacanciesOutputDTO{
    mensage:string
}
