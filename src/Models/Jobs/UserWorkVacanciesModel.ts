import { UserWorkVacanciesDB, UserWorkVacanciesModel } from "../../Interfaces/User/Users.Types";




export class UserWorkVacancies{


    constructor(

        private id:string,
        private userProfileId:string,
        private work_vacancy_id:string,
        private companie_id:string,
        private chosen:number,
        private appliedAt:string,
        private first_name:string,
        private last_name:string,
        private phone_number:string,
        private address:string,
        private image:string,
        private username:string,
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

    public getUserProfileId(): string {
        return this.userProfileId
    }
    public setUserProfileId(value: string): void {
        if(!value || typeof value !== "string"){
            throw new Error("User_id invalid")
        }
        this.userProfileId = value
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

    public getFirstName():string{
        return this.first_name
    }

    public setFirstName(value:string):void{
        this.first_name = value
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

    public getLastName():string{
        return this.last_name
    }

    public setLastName(value:string):void{
        this.last_name = value
    }

    public getCellphone():string{
        return this.phone_number
    }

    public setCellphone(value:string):void{
        this.phone_number = value
    }

    public getAddress():string{
        return this.address
    }

    public setAdress(value:string):void{
        this.address = value
    }

    public getChosen():number{
        return this.chosen
    }

    public setChosen(value:number):void{
        this.chosen = value
    }

    public getUsername():string{
        return this.username
    }

    public setUsername(value:string):void{
        this.username = value
    }

    public userWorkVacanciesDB():UserWorkVacanciesDB{
        return{
            id: this.id,
            userProfileId:this.userProfileId,
            work_vacancy_id: this.work_vacancy_id,
            companie_id: this.companie_id,
            chosen: this.chosen,
            applied_at: this.appliedAt
        }
    }


    public toUserWorkVacanciesModel():UserWorkVacanciesModel{
        return{
            id: this.id,
            userProfileId: this.userProfileId,
            work_vacancy_id: this.work_vacancy_id,
            companie_id: this.companie_id,
            chosen: this.chosen,
            applied_at: this.appliedAt,
            first_name: this.first_name,
            last_name: this.last_name,
            phone_number: this.phone_number,
            address: this.address,
            image: this.image,
            username: this.username,
            title: this.title,
            description: this.description,
            location:this.location,
            salary:this.salary
            
        }
    }
    
}