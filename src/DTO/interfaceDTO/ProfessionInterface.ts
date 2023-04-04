// SIGN UP

import { ProfessionModel } from "../../Interfaces/Profession/Profession.Types"

export interface CreateProfessionInputDTO {
    token:string | undefined,
    name: string,
    image:string
}

export interface CreateProfessionOutputDTO {
    mensage:string
}


//GET Profession POR ID

export interface GetProfessionInputDTO {
    token: string | undefined
    id: string
}

export interface GetAllProfessionInputDTO {
    token: string | undefined
}

export type GetProfessionOutputDTO = ProfessionModel

export type GetAllProfessionOutputDTO = ProfessionModel[]


//EDIT Profession INFO

export interface EditProfessionInputDTO {
    idToEdit: string,
    token: string | undefined,
    name: string,
    image: string
}

export interface EditProfessionOutputDTO {
    mensage: string
}


//DELETAR Profession

export interface DeleteProfessionInputDTO {
    idToDelete: string,
    token: string | undefined
}

export interface DeleteProfessionOutputDTO {
    mensage: string
}
