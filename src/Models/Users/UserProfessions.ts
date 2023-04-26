import {UserProfessionDB, UserProfessionModel} from "../../Interfaces/User/Users.Types";


export class UserProfession{
    constructor(

        private id:string,
        private userId:string,
        private professionId:string,
        private experienceYears: string,

    ){}

    public getId(): string {
        return this.id
    }
    public setId(value: string): void {
        if(!value || typeof value !=="string"){
            throw new Error("Id invalid")
        }
        this.id = value
    }

    public getUserId(): string {
        return this.userId
    }
    public setUserId(value: string): void {
        if(!value || typeof value !== "string"){
            throw new Error("User_id invalid")
        }
        this.userId = value
    }

    public getProfessionId(): string {
        return this.professionId
    }
    public setProfessionId(value: string): void {
        if(!value || typeof value !== "string"){
            throw new Error("Profession Id invalid")
        }
        this.professionId = value
    }

    public getExperienceYear(): string {
        return this.experienceYears
    }
    public setExperienceYear(value: string): void {
        if(!value || typeof value !== "string"){
            throw new Error("Experience Years invalid")
        }
        this.experienceYears = value
    }

    //Transforma o objeto em DB ou Model - teste




    public userProfessionToDB(): UserProfessionDB{
        return{
            id: this.id,
            user_id: this.userId,
            profession_id: this.professionId,
            experience_years: this.experienceYears

        }
    }
    
    public userProfessionToModel(): UserProfessionModel {
        return{
            id: this.id,
            userId: this.userId,
            professionId: this.professionId,
            experienceYears: this.experienceYears
        }
    }
}