import {  UserProfileModel } from "../../Interfaces/User/Users.type"


// Create


export interface CreateUserProfileInputDTO {
    token: string | undefined,
    user_id: string,
    first_name: string,
    last_name:string,
    address: string,
    phone_number:string,
    bio:string,
    skills:string,
    image:string

}

export interface CreateUserProfileOutputDTO {
    mensage:string
}


//GET

export interface GetUserProfileInputDTO {
    token: string | undefined
    id: string
}

export type GetUserProfileOutputDTO = UserProfileModel


//EDIT UserProfession INFO

export interface EditUserProfileInputDTO {

    token: string | undefined,
    idToEdit: string,
    first_name: string,
    last_name:string,
    address: string,
    phone_number:string,
    bio:string,
    skills:string,
    image:string

}

export interface EditUserProfileOutputDTO {
    mensage: string
}


//DELETAR userProfession

export interface DeleteUserProfileInputDTO {
    idToDelete: string,
    token: string | undefined
}

export interface DeleteUserProfileOutputDTO {
    mensage: string
}
