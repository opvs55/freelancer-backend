import { UserWorkVacanciesDB, UserWorkVacanciesDBimport } from "../Interfaces/User/Users.Types";
import { BaseDatabase } from "./BaseDataBase";




export class UserWorkVacanciesDataBase extends BaseDatabase {
    public static TABLE_USER_WORK_VACANCIES = "user_work_vacancies"


    public insert = async (userWorkVacanciesDB: UserWorkVacanciesDB) => {
        await BaseDatabase
            .connection(UserWorkVacanciesDataBase.TABLE_USER_WORK_VACANCIES)
            .insert(userWorkVacanciesDB)
    }


    public findById = async (id: string): Promise<UserWorkVacanciesDB> => {
        const result: UserWorkVacanciesDB[] = await BaseDatabase
            .connection(UserWorkVacanciesDataBase.TABLE_USER_WORK_VACANCIES)
            .select()
            .where({ 'user_work_vacancies.id': id });
    
        return result[0];
    }


    public findByUserId = async (user_id:string): Promise< UserWorkVacanciesDB[] > =>{


        const result: UserWorkVacanciesDB[] = await BaseDatabase
            .connection(UserWorkVacanciesDataBase.TABLE_USER_WORK_VACANCIES)
            .select()
            .where({"user_work_vacancies.user_id": user_id })

        return result
    }


    //fazer alguma modificações para buscar mais informações



    public getAllUserWorkVacancies = async (): Promise<UserWorkVacanciesDB[]> => {
        const result: UserWorkVacanciesDB[] = await BaseDatabase
            .connection(UserWorkVacanciesDataBase.TABLE_USER_WORK_VACANCIES)
            .select() //incluir dados de companies profile

            
        return result
    }


    public updateUserWorkVacancies = async (id: string, userWorkVacanciesDB: UserWorkVacanciesDB): Promise<void> => {
        await BaseDatabase.connection(UserWorkVacanciesDataBase.TABLE_USER_WORK_VACANCIES)
            .update(userWorkVacanciesDB)
            .where({ id })
    }

    public deleteUserWorkVacancies = async (id: string): Promise<void> => {
        await BaseDatabase.connection(UserWorkVacanciesDataBase.TABLE_USER_WORK_VACANCIES)
            .delete()
            .where({ id })

    }
}

