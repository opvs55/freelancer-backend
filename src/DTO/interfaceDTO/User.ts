import { UserModel } from "../../Interfaces/Users/Users.type"


// SIGN UP


export interface SignupUserInputDTO {

    username: unknown,
    email: unknown,
    cellphone: unknown,
    address: unknown,
    password: unknown,
    role: unknown,
    skills:unknown,
    image:unknown

}

export interface SignUpUserOutputDTO {
    token: string
}



//LOGIN

export interface LoginUserInputDTO {
    email: unknown,
    password: unknown
}

export interface LoginUserOutputDTO {
    token: string
}

//GET Companie POR ID

export interface GetUserInputDTO {
    token: string | undefined
    id: string
}

export type GetUserOutputDTO = UserModel


//EDIT Companie INFO

export interface EditUserInputDTO {

    idToEdit: unknown,
    token: unknown,
    username: unknown,
    email: unknown,
    cellphone: unknown,
    address: unknown,
    password: unknown,
    role: unknown,
    skills:unknown,
    image:unknown
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
