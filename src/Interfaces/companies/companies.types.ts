export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}


export interface CompaniesDB {
    id: string,
    name: string,
    email: string,
    cellphone:string,
    address:string,
    description:string,
    password: string,
    role: USER_ROLES,
    image:string,
    created_at: string
}


export interface CompaniesModel {
    id: string,
    name: string,
    email: string,
    cellphone:string,
    address:string,
    description:string,
    password: string,
    role: USER_ROLES,
    image:string,
    createdAt: string
}

export interface JobVacanciesDB{
    id:string,
    company_id:string,
    title: string,
    description:string,
    skills_required: string,
    location:string,
    salary: number,
    created_at:string
}

export interface jobVacanciesModel{
    id:string,
    company_id:string,
    title: string,
    description:string,
    skills_required: string,
    location:string,
    salary: number,
    created_at:string
    email:string,
    cellphone:string,
    address:string,
}


