// SIGN UP

import { CompanieModel } from "../../Interfaces/Companie/Companie.types"

export interface SignUpCompanieInputDTO {
    name: unknown,
    email: unknown,
    cellphone: unknown,
    address: unknown,
    description: unknown,
    password: unknown,
}

export interface SignUpCompanieOutputDTO {
    token: string
}

//LOGIN

export interface LoginCompanieInputDTO {
    email: unknown,
    password: unknown
}

export interface LoginCompanieOutputDTO {
    token: string
}


//GET Companie POR ID

export interface GetCompanieInputDTO {
    token: string | undefined
    id: string
}

export type GetCompanieOutputDTO = CompanieModel


//EDIT Companie INFO

export interface EditCompanieInputDTO {
    idToEdit: unknown,
    token: unknown,
    name: unknown,
    email: unknown,
    cellphone: unknown,
    address: unknown,
    description: unknown,
    password: unknown,
    image: unknown
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
