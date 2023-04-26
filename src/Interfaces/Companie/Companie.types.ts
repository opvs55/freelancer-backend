import { ProfessionDB, ProfessionModel } from "../Profession/Profession.Types"

export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}


export interface CompanieDB {
    id: string,
    username: string,
    email: string,
    password: string,
    role: USER_ROLES,
    created_at: string
}


export interface CompanieModel {
    id: string,
    username: string,
    email: string,
    role: USER_ROLES,
    createdAt: string
}

export interface WorkVacanciesDB{
    id:string,
    companie_id:string,
    title: string,
    description:string,
    skills_required: ProfessionDB,
    location:string,
    salary: number,
    created_at:string
}

export interface WorkVacanciesModel{
    id:string,
    companie_id:string,
    title: string,
    description:string,
    skills_required: ProfessionModel,
    location:string,
    salary: number,
    created_at:string
}


export interface CompanieProfileDB{
    id:string,
    companie_id: string,
    name:string,
    description:string,
    address:string,
    phone_number:string,
    image:string
}


export interface CompanieProfileModel {
    id:string,
    companieId: string,
    name:string,
    description:string,
    address:string,
    phoneNumber:string,
    image:string
}



