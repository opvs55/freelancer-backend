// SIGN UP

import { UserModel } from "../../Interfaces/User/Users.type"

export interface SignupUserInputDTO {

    username: string,
    email: string,
    password: string,

}

export interface SignUpUserOutputDTO {
    token: string
}



//LOGIN

export interface LoginUserInputDTO {
    email: string,
    password: string
}

export interface LoginUserOutputDTO {
    token: string
}

//GET Companie POR ID

export interface GetUserInputDTO {
    token: string | undefined
    id: string
}

export interface GetAllUserInputDTO {
    token: string | undefined
}

export type GetUserOutputDTO = UserModel
export type GetAllUserOutputDTO = UserModel[]


//EDIT Companie INFO

export interface EditUserInputDTO {

    idToEdit: string,
    token: string | undefined,
    username: string,
    email: string,  
    password: string,
}

export interface EditUserOutputDTO {
    mensage: string
}


//DELETAR Companie

export interface DeleteUserInputDTO {
    idToDelete: string,
    token: string | undefined
}

export interface DeleteUserOutputDTO {
    mensage: string
}
