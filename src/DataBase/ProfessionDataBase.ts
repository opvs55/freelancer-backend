import { ProfessionDB, ProfessionModel } from "../Interfaces/Profession/Profession.Types";
import { BaseDatabase } from "./BaseDataBase";


export class ProfessionDataBase extends BaseDatabase{

    public static TABLE_PROFESSIONS= "professions"

    public insert = async(professionDB: ProfessionDB) => {
        await BaseDatabase
            .connection(ProfessionDataBase.TABLE_PROFESSIONS)
            .insert(professionDB)
    }
    public findByEmail = async (email:string): Promise< ProfessionDB| undefined > =>{


        const result: ProfessionDB[] = await BaseDatabase
            .connection(ProfessionDataBase.TABLE_PROFESSIONS)
            .select()
            .where({email})

        return result[0]
    }
    public findById= async (id:string): Promise< ProfessionDB| undefined > =>{


        const result: ProfessionDB[] = await BaseDatabase
            .connection(ProfessionDataBase.TABLE_PROFESSIONS)
            .select()
            .where({id})

        return result[0]
    }
    public getProfession = async (id:string): Promise< ProfessionModel|undefined> => {
        const result: ProfessionModel[] = await BaseDatabase
            .connection(ProfessionDataBase.TABLE_PROFESSIONS)
            .select(
                "professions.id",
                "professions.name",
                "professions.image"
            )
            .where({id})

        return result[0]
    }
    public getAllProfession = async (): Promise<ProfessionModel[]> => {
        const result: ProfessionModel[] = await BaseDatabase
            .connection(ProfessionDataBase.TABLE_PROFESSIONS)
            .select(
                "professions.id",
                "professions.name",
                "professions.image"
            )

        return result
    }
    public updateProfession = async (id: string, professionDB : ProfessionDB): Promise<void> => {
        await BaseDatabase.connection(ProfessionDataBase.TABLE_PROFESSIONS)
            .update(professionDB)
            .where({ id })
    }
    public deleteProfession = async (id: string): Promise<void> => {
        await BaseDatabase.connection(ProfessionDataBase.TABLE_PROFESSIONS)
            .delete()
            .where({ id })
    }

}
