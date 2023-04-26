import {  WorkVacanciesDB, WorkVacanciesModel } from "../../Interfaces/Companie/Companie.types";
import { ProfessionDB } from "../../Interfaces/Profession/Profession.Types";




export class WorkVacancies{


    constructor(

        private id:string,
        private companieId:string,
        private title:string,
        private description:string,
        private skillsRequired:ProfessionDB,
        private location:string,
        private salary:number,
        private createdAt:string

    ){}

    public getId(): string {
        return this.id
    }
    public setId(value: string): void {
        this.id = value
    }

    public getCompanyId(): string {
        return this.companieId
    }
    public setCompanyId(value: string): void {
        this.companieId = value
    }

    public getTitle(): string {
        return this.title
    }
    public setTitle(value: string): void {
        this.title = value
    }

    public getDescription(): string {
        return this.description
    }
    public setDescription(value: string): void {
        this.description = value
    }

    public getskillsRequired(): ProfessionDB {
        return this.skillsRequired
    }
    public setskillsRequired(value:ProfessionDB): void {
        this.skillsRequired = value
    }

    public getLocation(): string {
        return this.location
    }
    public setLocation(value:string): void {
        this.location = value
    }

    public getSalary():number{
        return this.salary
    }

    public setSalary(value:number):void{
        this.salary = value
    }

    public getCreatedAt():string{
        return this.createdAt
    }

    public setCreatedAt(value:string):void{
        this.createdAt = value
    }


    public WorkVacanciesDB():WorkVacanciesDB{
        return{
            id: this.id,
            companie_id: this.companieId,
            title: this.title,
            description: this.description,
            skills_required: this.skillsRequired,
            location: this.location,
            salary: this.salary,
            created_at: this.createdAt
        }
    }


    public toWorkVacanciesModel():WorkVacanciesModel{
        return{
            id: this.id,
            companie_id: this.companieId,
            title: this.title,
            description: this.description,
            skills_required: this.skillsRequired,
            location: this.location,
            salary: this.salary,
            created_at: this.createdAt,
        }
    }
    
}
