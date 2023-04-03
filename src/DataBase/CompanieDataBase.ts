import { CompanieDB, CompanieModel } from "../Interfaces/Companie/Companie.types";
import { BaseDatabase } from "./BaseDataBase";


export class CompanieDataBase extends BaseDatabase{
    public static TABLE_COMPANIES = "companies"

    public insert = async(companieDB: CompanieDB) => {
        await BaseDatabase
            .connection(CompanieDataBase.TABLE_COMPANIES)
            .insert(companieDB)
    }
    public findByEmail = async (email:string): Promise< CompanieDB| undefined > =>{


        const result: CompanieDB[] = await BaseDatabase
            .connection(CompanieDataBase.TABLE_COMPANIES)
            .select()
            .where({email})

        return result[0]
    }
    public findById= async (id:string): Promise< CompanieDB| undefined > =>{


        const result: CompanieDB[] = await BaseDatabase
            .connection(CompanieDataBase.TABLE_COMPANIES)
            .select()
            .where({id})

        return result[0]
    }
    public getCompanie = async (): Promise<CompanieModel> => {
        const result: CompanieModel = await BaseDatabase
            .connection(CompanieDataBase.TABLE_COMPANIES)
            .select(
                "companies.id",
                "companies.name",
                "companies.email",
                "companies.cellphone",
                "companies.address",
                "companies.description",
                "companies.role",
                "companies.image"
            )

        return result
    }
    public getAllCompanie = async (): Promise<CompanieModel[]> => {
        const result: CompanieModel[] = await BaseDatabase
            .connection(CompanieDataBase.TABLE_COMPANIES)
            .select(
                "companies.id",
                "companies.name",
                "companies.email",
                "companies.cellphone",
                "companies.address",
                "companies.description",
                "companies.role",
                "companies.image"
            )

        return result
    }
    public updateCompanie = async (id: string, companieDB: CompanieDB): Promise<void> => {
        await BaseDatabase.connection(CompanieDataBase.TABLE_COMPANIES)
            .update(companieDB)
            .where({ id })
    }
    public deleteCompanie = async (id: string): Promise<void> => {
        await BaseDatabase.connection(CompanieDataBase.TABLE_COMPANIES)
            .delete()
            .where({ id })
    }

}
