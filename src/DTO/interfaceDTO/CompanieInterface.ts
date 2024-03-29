// SIGN UP

import { CompanieModel } from "../../Interfaces/Companie/Companie.types"

export interface SignUpCompanieInputDTO {
    username: string,
    email: string,
    password: string,
}

export interface SignUpCompanieOutputDTO {
    token: string
}

//LOGIN

export interface LoginCompanieInputDTO {
    email: string,
    password: string
}

export interface LoginCompanieOutputDTO {
    token: string
}


//GET Companie POR ID

export interface GetCompanieInputDTO {
    token: string | undefined
    id: string
}

export interface GetAllCompanieInputDTO {
    token: string | undefined
}

export type GetCompanieOutputDTO = CompanieModel

export type GetAllCompanieOutputDTO = CompanieModel[]


//EDIT Companie INFO

export interface EditCompanieInputDTO {
    idToEdit: string,
    token: string | undefined,
    username: string,
    email: string,
    password: string
}

export interface EditCompanieOutputDTO {
    mensage: string
}


//DELETAR Companie

export interface DeleteCompanieInputDTO {
    idToDelete: string,
    token: string | undefined
}

export interface DeleteCompanieOutputDTO {
    mensage: string
}
