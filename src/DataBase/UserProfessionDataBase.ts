import {  UserProfessionDB, UserProfessionModel } from "../Interfaces/User/Users.Types";
import { BaseDatabase } from "./BaseDataBase";


export class UserProfessionDataBase extends BaseDatabase{
    public static TABLE_USER_PROFESSIONS = "user_professions"

    public insert = async(userProfessionDB: UserProfessionDB) => {
        await BaseDatabase
            .connection(UserProfessionDataBase.TABLE_USER_PROFESSIONS)
            .insert(userProfessionDB)
    }


    public findById= async (id:string): Promise< UserProfessionDB > =>{


        const result: UserProfessionDB [] = await BaseDatabase
            .connection(UserProfessionDataBase.TABLE_USER_PROFESSIONS)
            .select()
            .where({id})

        return result[0]
    }


    public findByUserId= async (user_id:string): Promise< UserProfessionDB > =>{


        const result: UserProfessionDB [] = await BaseDatabase
            .connection(UserProfessionDataBase.TABLE_USER_PROFESSIONS)
            .select()
            .where({"user_professions.user_id":user_id})

        return result[0]
    }


    public findByUserIdModel = async (user_id:string): Promise< UserProfessionModel[] > =>{


        const result: UserProfessionModel[] = await BaseDatabase
            .connection(UserProfessionDataBase.TABLE_USER_PROFESSIONS)
            .select(
                "user_professions.id",
                "user_professions.user_id",
                "users.username",
                "professions.name",
                "user_professions.profession_id",
                "user_professions.experience_years"
            )
            .where({"user_professions.user_id":user_id})
            .leftJoin("users", "user_professions.user_id", "users.id")
            .leftJoin("professions", "user_professions.profession_id", "professions.id")

        return result
    }


    //fazer alguma modificações para buscar mais informações


    public getUserProfession = async (id:string): Promise<UserProfessionModel> => {
        const result: UserProfessionModel[] = await BaseDatabase
            .connection(UserProfessionDataBase.TABLE_USER_PROFESSIONS)
            .select(
                "user_professions.id",
                "user_professions.user_id",
                "user_professions.profession_id",
                "users.username",
                "user_professions.experience_years"
            )
            .leftJoin("users", "user_professions.user_id", "users.id")
            .where({ "user_professions.id": id });

        return result[0]
    }
    public getAllUserProfession = async (): Promise<UserProfessionModel[]> => {
        const result: UserProfessionModel[] = await BaseDatabase
            .connection(UserProfessionDataBase.TABLE_USER_PROFESSIONS)
            .select(
                "user_professions.id",
                "user_professions.user_id",
                "users.username",
                "professions.name",
                "user_professions.profession_id",
                "user_professions.experience_years"
            )
            .leftJoin("users", "user_professions.user_id", "users.id")
            .leftJoin("professions", "user_professions.profession_id", "professions.id")

        return result
    }
    

    public updateUserProfession = async (id: string, userProfessionDB: UserProfessionDB): Promise<void> => {
        await BaseDatabase.connection(UserProfessionDataBase.TABLE_USER_PROFESSIONS)
            .update(userProfessionDB)
            .where({ id })
    }

    public deleteUserProfession = async (id: string): Promise<void> => {
        await BaseDatabase.connection(UserProfessionDataBase.TABLE_USER_PROFESSIONS)
            .delete()
            .where({ id })
    }
}

