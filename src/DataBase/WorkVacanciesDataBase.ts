import { WorkVacanciesDB, WorkVacanciesModel } from "../Interfaces/Companie/Companie.Types";
import { BaseDatabase } from "./BaseDataBase";


export class WorkVacanciesDataBase extends BaseDatabase{
    public static TABLE_WORK_VACANCIES = "work_vacancies"

    public insert = async(workVacanciesDB: WorkVacanciesDB) => {
        await BaseDatabase
            .connection(WorkVacanciesDataBase.TABLE_WORK_VACANCIES)
            .insert(workVacanciesDB)
    }


    public findById= async (id:string): Promise< WorkVacanciesDB > =>{


        const result: WorkVacanciesDB[] = await BaseDatabase
            .connection(WorkVacanciesDataBase.TABLE_WORK_VACANCIES)
            .select()
            .where({id})

        return result[0]
    }


    //fazer alguma modificações para buscar mais informações


    public getWorkVacancies = async (id:string): Promise<WorkVacanciesModel> => {
        const result: WorkVacanciesModel[] = await BaseDatabase
            .connection(WorkVacanciesDataBase.TABLE_WORK_VACANCIES)
            .select(
                "work_vacancies.id",
                "work_vacancies.company_id",
                "companies.name",
                "work_vacancies.title",
                "work_vacancies.description",
                "work_vacancies.skills_required",
                "work_vacancies.location",
                "work_vacancies.salary",
                "work_vacancies.created_at"
            )
            .leftJoin("companies", "work_vacancies.company_id", "companies.id")
            .where({ "work_vacancies.id": id });

        return result[0]
    }


    public getAllWorkVacancies = async (): Promise<WorkVacanciesModel[]> => {
        const result: WorkVacanciesModel[] = await BaseDatabase
            .connection(WorkVacanciesDataBase.TABLE_WORK_VACANCIES)
            .select(
                "work_vacancies.id",
                "work_vacancies.company_id",
                "companies.name",
                "work_vacancies.title",
                "work_vacancies.description",
                "work_vacancies.skills_required",
                "work_vacancies.location",
                "work_vacancies.salary",
                "work_vacancies.created_at"
            )
            .leftJoin("companies", "work_vacancies.company_id", "companies.id")

        return result
    }
    

    public updateWorkVacancies = async (id: string, workVacanciesDB : WorkVacanciesDB): Promise<void> => {
        await BaseDatabase.connection(WorkVacanciesDataBase.TABLE_WORK_VACANCIES)
            .update(workVacanciesDB)
            .where({ id })
    }

    public deleteWorkVacancies = async (id: string): Promise<void> => {
        await BaseDatabase.connection(WorkVacanciesDataBase.TABLE_WORK_VACANCIES)
            .delete()
            .where({ id })
    }
}

