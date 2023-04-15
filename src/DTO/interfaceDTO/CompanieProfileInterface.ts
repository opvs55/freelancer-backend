import { CompanieProfileDB, CompanieProfileModel } from "../../Interfaces/Companie/Companie.types"


// Create


export interface CreateCompanieProfileInputDTO {
    token: string | undefined,
    companie_id: string,
    name: string,
    description:string,
    address: string,
    phone_number:string,
    image:string

}

export interface CreateCompanieProfileOutputDTO {
    mensage:string
}


//GET

export interface GetCompanieProfileInputDTO {
    token: string | undefined
    id: string
}

export type GetCompanieProfileOutputDTO = CompanieProfileDB


export interface GetAllCompanieProfileInputDTO {
    token: string | undefined
}

export type GetAllCompanieProfileOutputDTO = CompanieProfileModel[]


//EDIT CompanieProfession INFO

export interface EditCompanieProfileInputDTO {

    token: string | undefined,
    idToEdit: string,
    name: string,
    description:string,
    address: string,
    phone_number:string,
    image:string

}

export interface EditCompanieProfileOutputDTO {
    mensage: string
}


//DELETAR CompanieProfession

export interface DeleteCompanieProfileInputDTO {
    idToDelete: string,
    token: string | undefined
}

export interface DeleteCompanieProfileOutputDTO {
    mensage: string
}
