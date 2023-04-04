import {  UserProfileDB, UserProfileModel } from "../Interfaces/User/Users.type";
import { BaseDatabase } from "./BaseDataBase";


export class UserProfileDataBase extends BaseDatabase{
    public static TABLE_USER_PROFILES = "user_profiles"

    public insert = async(userProfileDB: UserProfileDB| UserProfileDB) => {
        await BaseDatabase
            .connection(UserProfileDataBase.TABLE_USER_PROFILES)
            .insert(userProfileDB)
    }


    public findById= async (id:string): Promise< UserProfileDB| undefined > =>{


        const result: UserProfileDB[] = await BaseDatabase
            .connection(UserProfileDataBase.TABLE_USER_PROFILES)
            .select()
            .where({id})

        return result[0]
    }

    public getUserProfile = async (id:string): Promise<UserProfileModel|undefined> => {
        const result: UserProfileModel[] = await BaseDatabase
            .connection(UserProfileDataBase.TABLE_USER_PROFILES)
            .select(
                "user_profiles.id",
                "user_profiles.user_id",
                "users.username",
                "user_profiles.first_name",
                "user_profiles.last_name",
                "user_profiles.address",
                "user_profiles.phone_number",
                "user_profiles.bio",
                "user_profiles.skills",
                "user_profiles.image"
            )
            .leftJoin("users", "user_profiles.user_id", "users.id")
            .where({ "user_profiles.id": id });

        return result[0]
    }


    public updateUserProfile = async (id: string, userProfileDB: UserProfileDB): Promise<void> => {
        await BaseDatabase.connection(UserProfileDataBase.TABLE_USER_PROFILES)
            .update(userProfileDB)
            .where({ id })
    }

    public deleteUserUserProfile = async (id: string): Promise<void> => {
        await BaseDatabase.connection(UserProfileDataBase.TABLE_USER_PROFILES)
            .delete()
            .where({ id })
    }
}

