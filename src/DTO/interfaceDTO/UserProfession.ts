import {  UserProfessionsModel } from "../../Interfaces/Users/Users.type"


// Create


export interface CreateUserProfessions {
    token:unknown,
    id: unknown,
    user_id: unknown,
    profession: unknown,
    experienceYears: unknown

}

export interface SignUpUserProfessionsOutputDTO {
    mensage:string
}


//GET

export interface GetUserProfessionsInputDTO {
    token: string | undefined
}

export type GetUserProfessionsOutputDTO = UserProfessionsModel[]


//EDIT UserProfession INFO

export interface EditUserProfessionsInputDTO {

    idToEdit: unknown,
    token: unknown,
    profession: unknown,
    experienceYears: unknown

}

export interface EditUserProfessionsOutputDTO {
    mensage: string
}


//DELETAR userProfession

export interface DeleteUserProfessionsInputDTO {
    idToDelete: string,
    token: string | undefined
}

export interface DeleteUserProfessionsOutputDTO {
    mensage: string
}
