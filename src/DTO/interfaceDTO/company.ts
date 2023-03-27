


// SIGN UP

import { CompaniesModel } from "../../Interfaces/companies/companies.types"

export interface SignUpCompanyInputDTO {
    name: unknown,
    email: unknown,
    cellphone: unknown,
    address: unknown,
    description: unknown,
    password: unknown,
}

export interface SignUpCompanyOutputDTO {
    token: string
}

//LOGIN

export interface LoginCompanyInputDTO {
    email: unknown,
    password: unknown
}

export interface LoginCompanyOutputDTO {
    token: string
}


//GET COMPANY POR ID

export interface GetCompanyInputDTO {
    token: string | undefined
    id: string
}

export type GetCompanyOutputDTO = CompaniesModel


//EDIT COMPANY INFO

export interface EditCompanyInputDTO {
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

export interface EditCompanyOutputDTO {
    mensage: string
}


//DELETAR COMPANY

export interface DeleteCompanyInputDTO {
    idToDelete: string,
    token: string | undefined
}

export interface DeleteCompanyOutputDTO {
    mensage: string
}
