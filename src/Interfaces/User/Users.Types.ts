import {  CompanieProfileDB, WorkVacanciesDB } from "../Companie/Companie.types"



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


export interface UserProfileDB {
    id: string,
    user_id: string,
    first_name: string,
    last_name: string,
    address: string,
    phone_number: string,
    bio: string,
    image: string,
}


export interface UserProfileModel {
    id: string,
    userId: string,
    firstName: string,
    lastName: string,
    address: string,
    phoneNumber: string,
    bio: string,
    skills: UserProfessionDB[],
    image: string,
}


export interface UserProfessionDB {
    id: string,
    user_id: string,
    profession_id: string,
    experience_years: string
}

export interface UserProfessionModel {
    id: string,
    userId: string,
    professionId: string,
    experienceYears: string
}


export interface UserWorkVacanciesDB {
    id: string,
    user_id: string,
    work_vacancy_id: string,
    companie_id: string,
    chosen: number,
    applied_at: string,
}


export interface UserWorkVacanciesModel {
    id: string,
    user_id: string,
    work_vacancy_id: string,
    companie_id: string,
    chosen: number,
    applied_at: string,
    user: {
        userProfile: UserProfileDB,
        skills: UserProfessionDB[]
    },
    job: {
        workVacancies: WorkVacanciesDB,
        companie:CompanieProfileDB
    }
}

export interface UserWorkVacanciesDBimport {
    id: string,
    user_id: string,
    work_vacancy_id: string,
    companie_id: string,
    profession_id: string,
    chosen: number,
    applied_at: string,
    first_name: string,
    last_name: string,
    phone_number: string,
    address: string,
    image: string,
    title: string,
    description: string,
    location: string,
    salary: number,

}


