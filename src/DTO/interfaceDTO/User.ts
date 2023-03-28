import { UserModel } from "../../Interfaces/User/Users.type"


// SIGN UP


export interface SignupUserInputDTO {

    username: string,
    email: string,
    cellphone: string,
    address: string,
    password: string,
    skills:string,

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

export type GetUserOutputDTO = UserModel


//EDIT Companie INFO

export interface EditUserInputDTO {

    idToEdit: string,
    token: string,
    username: string,
    email: string,
    cellphone: string,
    address: string,
    password: string,
    skills:string,
    image:string
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
