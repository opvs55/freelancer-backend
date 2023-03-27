export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export interface TokenPayLoad {
    id: string,
    username: string,
    role: USER_ROLES
}


export interface UserDB {
    id: string,
    username: string,
    email: string,
    cellphone: string,
    address : string,
    password: string,
    role: USER_ROLES,
    skills:string,
    image: string,
    created_at: string
}

export interface UserModel {
    id: string,
    username: string,
    email: string,
    password: string,
    cellphone: string,
    address : string,
    role: USER_ROLES,
    skills:string,
    image: string,
    createdAt: string
}


export interface UserProfessionsDB{
    id:string,
    user_id: string,
    profession: string,
    experiencie_years: number,
}


export interface UserProfessionsModel {
    id: string,
    userId: string,
    profession: string,
    experiencieYears: number,
    username: string, 
    email: string,
    cellphone:string,
    image: string
}


export interface UserJobVacanciesDB{
    id:string,
    user_id:string,
    job_vacancy_id:string,
    company_id:string,
    aplied_at: string,
}


export interface UserJobVacanciesModel{
    id:string,
    userId: string,
    jobVacancyId:string,
    companyId:string,
    aplied_at:string,
    username:string,
    email:string,
    cellphone:string,
    address:string,
    image:string,
    job:{
        title:string,
        description:string,
        location:string,
        salary: number,
    }
}


