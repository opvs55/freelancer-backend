import { UserWorkVacanciesDB, UserWorkVacanciesModel } from "../../Interfaces/Users/Users.type";




export class UserWorkVacancies{


    constructor(

        private id:string,
        private userId:string,
        private workVacancieId:string,
        private companyId:string,
        private appliedAt:string,
        private username:string,
        private email:string,
        private cellphone:string,
        private address:string,
        private image:string,
        private title:string,
        private description:string,
        private location:string,
        private salary:number

    ){}

    public getId(): string {
        return this.id
    }
    public setId(value: string): void {
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

    public getJobVacancyId():string{
        return this.workVacancieId
    }

    public setJobVacancyId(value:string):void{
        this.workVacancieId = value
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

    public getAppliedAt(): string {
        return this.appliedAt
    }
    public setAppliedAt(value:string): void {
        this.appliedAt = value
    }

    public getUsername():string{
        return this.username
    }

    public setUsername(value:string):void{
        this.username = value
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

    public getImage():string{
        return this.image
    }

    public setImage(value:string):void{
        this.image = value
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

    public workVacanciesDB():UserWorkVacanciesDB{
        return{
            id: this.id,
            user_id:this.userId,
            work_vacancy_id: this.workVacancieId,
            company_id: this.companyId,
            aplied_at: this.appliedAt
        }
    }


    public toWorkVacanciesModel():UserWorkVacanciesModel{
        return{
            id: this.id,
            userId: this.userId,
            workVacancyId: this.workVacancieId,
            companyId: this.companyId,
            aplied_at: this.appliedAt,
            username: this.username,
            email: this.email,
            cellphone: this.cellphone,
            address: this.address,
            image: this.image,
            work:{
                title: this.title,
                description: this.description,
                location:this.location,
                salary:this.salary
            }
        }
    }
    
}