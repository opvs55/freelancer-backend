import {  JobVacanciesDB, jobVacanciesModel } from "../../Interfaces/companies/companies.types";




export class JobVacancies{


    constructor(

        private id:string,
        private companyId:string,
        private title:string,
        private description:string,
        private skillsRequired:string,
        private location:string,
        private salary:number,
        private createdAt:string,
        private email:string,
        private cellphone:string,
        private address:string

    ){}

    public getId(): string {
        return this.id
    }
    public setId(value: string): void {
        this.id = value
    }

    public getCompanyId(): string {
        return this.companyId
    }
    public setCompanyId(value: string): void {
        this.companyId = value
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

    public getskillsRequired(): string {
        return this.skillsRequired
    }
    public setskillsRequired(value:string): void {
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

    public getEmail():string{
        return this.email
    }

    public setEmail(value:string):void{
        this.email = value
    }

    public getCellphone():string{
        return this.cellphone
    }

    public setCellphone(value:string):void{
        this.cellphone = value
    }

    public getAddress():string{
        return this.address
    }

    public setAdress(value:string):void{
        this.address = value
    }

    public jobVacanciesDB():JobVacanciesDB{
        return{
            id: this.id,
            company_id: this.companyId,
            title: this.title,
            description: this.description,
            skills_required: this.skillsRequired,
            location: this.location,
            salary: this.salary,
            created_at: this.createdAt
        }
    }


    public toJobVacanciesModel():jobVacanciesModel{
        return{
            id: this.id,
            company_id: this.companyId,
            title: this.title,
            description: this.description,
            skills_required: this.skillsRequired,
            location: this.location,
            salary: this.salary,
            created_at: this.createdAt,
            email: this.email,
            cellphone: this.cellphone,
            address: this.address
        }
    }
    
}