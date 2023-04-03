import {  UserProfileModel } from "../../Interfaces/User/Users.type"


// Create


export interface CreateUserProfile {
    token:unknown,
    id: unknown,
    user_id: unknown,
    first_name: unknown,
    last_name:unknown,
    address: unknown,
    phone_number:unknown,
    bio:unknown,
    skills:unknown,
    image:unknown

}

export interface SignUpUserProfileOutputDTO {
    mensage:string
}


//GET

export interface GetUserProfileInputDTO {
    token: string | undefined
}

export type GetUserProfileOutputDTO = UserProfileModel[]


//EDIT UserProfession INFO

export interface EditUserProfileInputDTO {

    idToEdit: unknown,
    token: unknown,
    first_name: unknown,
    last_name:unknown,
    address: unknown,
    phone_number:unknown,
    bio:unknown,
    skills:unknown,
    image:unknown

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
