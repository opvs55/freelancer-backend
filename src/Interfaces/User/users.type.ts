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
    password: string,
    role: USER_ROLES,
    created_at: string
}

export interface UserModel {
    id: string,
    username: string,
    email: string,
    role: USER_ROLES,
    createdAt: string
}


export interface UserProfileDB{
    id:string,
    user_id: string,
    first_name:string,
    last_name:string,
    address:string,
    phone_number:string,
    bio:string,
    skills:string,
    image:string,
}


export interface UserProfileModel {
    id:string,
    userId: string,
    firstName:string,
    lastName:string,
    address:string,
    phoneNumber:string,
    bio:string,
    skills:string,
    image:string,
}


export interface UserWorkVacanciesDB{
    id:string,
    user_id:string,
    work_vacancy_id:string,
    company_id:string,
    aplied_at: string,
}


export interface UserWorkVacanciesModel{
    id:string,
    userId: string,
    workVacancyId:string,
    companyId:string,
    aplied_at:string,
    username:string,
    email:string,
    cellphone:string,
    address:string,
    image:string,
    work:{
        title:string,
        description:string,
        location:string,
        salary: number,
    }
}


