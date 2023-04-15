import { UserWorkVacanciesDB, UserWorkVacanciesModel } from "../Interfaces/User/Users.Types";
import { BaseDatabase } from "./BaseDataBase";




export class UserWorkVacanciesDataBase extends BaseDatabase {
    public static TABLE_USER_WORK_VACANCIES = "user_work_vacancies"


    public insert = async (userWorkVacanciesDB: UserWorkVacanciesDB) => {
        await BaseDatabase
            .connection(UserWorkVacanciesDataBase.TABLE_USER_WORK_VACANCIES)
            .insert(userWorkVacanciesDB)
    }


    public findById = async (id: string): Promise<UserWorkVacanciesModel> => {
        const result: UserWorkVacanciesModel[] = await BaseDatabase
            .connection(UserWorkVacanciesDataBase.TABLE_USER_WORK_VACANCIES)
            .select(
                "user_work_vacancies.id",
                "user_work_vacancies.userProfileId",
                "user_work_vacancies.work_vacancy_id",
                "work_vacancies.company_id",
                "user_work_vacancies.chosen",
                "user_work_vacancies.applied_at",
                "user_profiles.first_name",
                "user_profiles.last_name",
                "user_profiles.phone_number",
                "user_profiles.address",
                "user_profiles.image",
                "work_vacancies.title",
                "work_vacancies.description",
                "work_vacancies.location",
                "work_vacancies.salary"
            )
            .leftJoin("user_profiles", "user_work_vacancies.userProfileId", "user_profiles.id")
            .rightJoin("work_vacancies", "user_work_vacancies.work_vacancy_id", "work_vacancies.id")
            .where({ 'user_work_vacancies.id': id });
    
        return result[0];
    }


    public findByProfileUserId = async (userProfileId:string): Promise< UserWorkVacanciesDB > =>{


        const result: UserWorkVacanciesDB[] = await BaseDatabase
            .connection(UserWorkVacanciesDataBase.TABLE_USER_WORK_VACANCIES)
            .select()
            .where({"user_work_vacancies.userProfileId": userProfileId })

        return result[0]
    }


    //fazer alguma modificações para buscar mais informações



    public getAllUserWorkVacancies = async (): Promise<UserWorkVacanciesModel[]> => {
        const result: UserWorkVacanciesModel[] = await BaseDatabase
            .connection(UserWorkVacanciesDataBase.TABLE_USER_WORK_VACANCIES)
            .select(
                "user_work_vacancies.id",
                "user_work_vacancies.userProfileId",
                "user_work_vacancies.work_vacancy_id",
                "user_work_vacancies.companie_id",
                "work_vacancies.company_id",
                "user_work_vacancies.chosen",
                "user_work_vacancies.applied_at",
                "user_profiles.first_name",
                "user_profiles.last_name",
                "user_profiles.phone_number",
                "user_profiles.address",
                "user_profiles.image",
                "companies.username",
                "work_vacancies.title",
                "work_vacancies.description",
                "work_vacancies.location",
                "work_vacancies.salary"
            )
            .leftJoin("user_profiles", "user_work_vacancies.userProfileId", "user_profiles.id")
            .leftJoin("work_vacancies", "user_work_vacancies.work_vacancy_id", "work_vacancies.id")
            .leftJoin("companies", "user_work_vacancies.companie_id", "companies.id")
            
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

