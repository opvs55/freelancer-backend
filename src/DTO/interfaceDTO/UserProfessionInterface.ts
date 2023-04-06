import {  UserProfessionModel } from "../../Interfaces/User/Users.Types"


// Create


export interface CreateUserProfessionInputDTO {
    token: string | undefined,
    user_id: string,
    profession_id:string,
    experience_years: string
}

export interface CreateUserProfessionOutputDTO {
    mensage:string
}


//GET

export interface GetUserProfessionInputDTO {
    token: string | undefined
    id: string
}

export interface GetAllUserProfessionInputDTO {
    token: string | undefined
}

export type GetUserProfessionOutputDTO = UserProfessionModel

export type GetAllUserProfessionOutputDTO = UserProfessionModel[]


//EDIT UserProfession INFO

export interface EditUserProfessionInputDTO {

    token: string | undefined,
    idToEdit: string,
    experience_years: string

}

export interface EditUserProfessionOutputDTO {
    mensage: string
}


//DELETAR userProfession

export interface DeleteUserProfessionInputDTO {
    idToDelete: string,
    token: string | undefined
}

export interface DeleteUserProfessionOutputDTO {
    mensage: string
}
