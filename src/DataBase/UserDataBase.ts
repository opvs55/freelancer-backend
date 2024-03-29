import { UserDB, UserModel, UserProfileDB } from "../Interfaces/User/Users.Types";
import { BaseDatabase } from "./BaseDataBase";


export class UserDataBase extends BaseDatabase{
    public static TABLE_USERS = "users"

    public insert = async(userDB: UserDB | UserProfileDB) => {
        await BaseDatabase
            .connection(UserDataBase.TABLE_USERS)
            .insert(userDB)
    }


    public findByEmail = async (email:string): Promise< UserDB > =>{


        const result: UserDB[] = await BaseDatabase
            .connection(UserDataBase.TABLE_USERS)
            .select()
            .where({email})

        return result[0]
    }
    public findByIdDBModel= async (id:string): Promise< UserDB > =>{


        const result: UserDB[] = await BaseDatabase
            .connection(UserDataBase.TABLE_USERS)
            .select()
            .where({id})

        return result[0]
    }

    public findByIdModel = async (id:string): Promise< UserModel > =>{


        const result: UserModel[] = await BaseDatabase
            .connection(UserDataBase.TABLE_USERS)
            .select()
            .where({id})

        return result[0]
    }

    public getUser = async (): Promise<UserModel> => {
        const result: UserModel = await BaseDatabase
            .connection(UserDataBase.TABLE_USERS)
            .select(
                "users.id",
                "users.username",
                "users.email",
                "users.role",
                "users.created_at"
            )

        return result
    }

    public getAllUser = async (): Promise<UserModel[]> => {
        const result: UserModel[] = await BaseDatabase
            .connection(UserDataBase.TABLE_USERS)
            .select(
                "users.id",
                "users.username",
                "users.email",
                "users.role",
                "users.created_at"
            )

        return result
    }

    public updateUser = async (id: string, userDB: UserDB): Promise<void> => {
        await BaseDatabase.connection(UserDataBase.TABLE_USERS)
            .update(userDB)
            .where({ id })
    }

    public deleteUser = async (id: string): Promise<void> => {
        await BaseDatabase.connection(UserDataBase.TABLE_USERS)
            .delete()
            .where({ id })
    }
}

