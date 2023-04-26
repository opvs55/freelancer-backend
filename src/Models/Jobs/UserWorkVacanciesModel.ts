import { CompanieProfileDB, WorkVacanciesDB } from "../../Interfaces/Companie/Companie.types";
import { UserProfessionDB, UserProfileDB, UserWorkVacanciesDB, UserWorkVacanciesModel } from "../../Interfaces/User/Users.Types";




export class UserWorkVacancies{


    constructor(

        private id:string,
        private user_id:string,
        private work_vacancy_id:string,
        private companie_id:string,
        private chosen:number,
        private appliedAt:string,
        private companie:CompanieProfileDB,
        private userProfile: UserProfileDB,
        private workVacancies: WorkVacanciesDB,
        private skills:any[]

    ){}

    public getId(): string {
        return this.id
    }
    public setId(value: string): void {
        this.id = value
    }

    public getUserProfileId(): string {
        return this.user_id
    }
    public setUserProfileId(value: string): void {
        if(!value || typeof value !== "string"){
            throw new Error("User_id invalid")
        }
        this.user_id = value
    }

    public getWorkVacancieId():string{
        return this.work_vacancy_id
    }

    public setWorkVacancieId(value:string):void{
        this.work_vacancy_id = value
    }

    public getCompanieId(): string {
        return this.companie_id
    }
    public setCompanieId(value: string): void {
        this.companie_id = value
    }

    public getAppliedAt(): string {
        return this.appliedAt
    }
    public setAppliedAt(value:string): void {
        this.appliedAt = value
    }

    public getChosen():number{
        return this.chosen
    }

    public setChosen(value:number):void{
        this.chosen = value
    }

    public getSkills(): UserProfessionDB[] {
        return this.skills
    }
    public setSkills(value: UserProfessionDB[]): void {
        this.skills = value
    }


    public userWorkVacanciesDB():UserWorkVacanciesDB{
        return{
            id: this.id,
            user_id: this.user_id,
            work_vacancy_id: this.work_vacancy_id,
            companie_id: this.companie_id,
            chosen: this.chosen,
            applied_at: this.appliedAt
        }
    }


    public toUserWorkVacanciesModel():UserWorkVacanciesModel{
        return{
            id: this.id,
            user_id: this.user_id,
            work_vacancy_id: this.work_vacancy_id,
            companie_id: this.companie_id,
            chosen: this.chosen,
            applied_at: this.appliedAt,
            user:{
                userProfile: this.userProfile,
                skills: this.skills
                
            },
            job:{
                workVacancies: this.workVacancies,
                companie: this.companie
            }
            
        }
    }
    
}