import { CompanieProfileDB, CompanieProfileModel } from "../Interfaces/Companie/Companie.types";
import { BaseDatabase } from "./BaseDataBase";


export class CompanieProfileDataBase extends BaseDatabase{
    public static TABLE_COMPANIES_PROFILES = "companie_profile"

    public insert = async( companieProfileDB : CompanieProfileDB ) => {
        await BaseDatabase
            .connection(CompanieProfileDataBase.TABLE_COMPANIES_PROFILES)
            .insert(companieProfileDB)
    }


    public findById= async (id:string): Promise< CompanieProfileDB > =>{


        const result:  CompanieProfileDB[] = await BaseDatabase
            .connection(CompanieProfileDataBase.TABLE_COMPANIES_PROFILES)
            .select()
            .where({id})

        return result[0]
    }

    
    public findByCompanieId= async (companie_id:string): Promise< CompanieProfileDB > =>{


        const result:  CompanieProfileDB[] = await BaseDatabase
            .connection(CompanieProfileDataBase.TABLE_COMPANIES_PROFILES)
            .select()
            .where({"companie_profile.companie_id" :companie_id})

        return result[0]
    }

    public getCompanieProfile = async (id:string): Promise<CompanieProfileModel> => {
        const result: CompanieProfileModel[] = await BaseDatabase
            .connection(CompanieProfileDataBase.TABLE_COMPANIES_PROFILES)
            .select(
                "companie_profile.id",
                "companie_profile.companie_id",
                "companies.username",
                "companie_profile.name",
                "companie_profile.description",
                "companie_profile.address",
                "companie_profile.phone_number",
                "companie_profile.image"
            )
            .leftJoin("companies", "companie_profile.companie_id ", "companies.id")
            .where({ "companie_profile.id": id });

        return result[0]
    }

    public getAllCompanieProfile = async (): Promise<CompanieProfileModel[]> => {
        const result: CompanieProfileModel[] = await BaseDatabase
            .connection(CompanieProfileDataBase.TABLE_COMPANIES_PROFILES)
            .select(
                "companie_profile.id",
                "companie_profile.companie_id",
                "companies.username",
                "companie_profile.name",
                "companie_profile.description",
                "companie_profile.address",
                "companie_profile.phone_number",
                "companie_profile.image"
            )
            .leftJoin("companies", "companie_profile.companie_id ", "companies.id")

        return result
    }


    public updateCompanieProfile = async (id: string, companieProfileDB : CompanieProfileDB): Promise<void> => {
        await BaseDatabase.connection(CompanieProfileDataBase.TABLE_COMPANIES_PROFILES)
            .update(companieProfileDB )
            .where({ id })
    }

    public deleteCompanieProfile = async (id: string): Promise<void> => {
        await BaseDatabase.connection(CompanieProfileDataBase.TABLE_COMPANIES_PROFILES)
            .delete()
            .where({ id })
    }
}

