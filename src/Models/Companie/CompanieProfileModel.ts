import { CompanieProfileDB, CompanieProfileModel } from "../../Interfaces/Companie/Companie.types";


export class CompanieProfiles{
    constructor(
        private id:string,
        private companieId:string,
        private name:string,
        private description:string,
        private address: string,
        private phoneNumber: string,
        private image:string
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

    public getCompanieId(): string {
        return this.companieId
    }
    public setCompanieId(value: string): void {
        if(!value || typeof value !== "string"){
            throw new Error("User_id invalid")
        }
        this.companieId= value
    }

    public getName(): string {
        return this.name
    }
    public setName(value: string): void {
        if(!value || typeof value !== "string"){
            throw new Error("FirstName invalid")
        }
        this.name = value
    }

    public getDescription(): string {
        return this.description
    }
    public setDescription(value: string): void {
        if(!value || typeof value !== "string"){
            throw new Error("LastName invalid")
        }
        this.description = value
    }

    public getAddress(): string {
        return this.address
    }
    public setAddress(value: string): void {
        if (!value || typeof value !== "string"){
            throw(new Error("Address invalid"))
        }
        this.address = value
    }

    public getPhoneNumber(): string {
        return this.phoneNumber
    }
    public setPhoneNumber(value: string): void {
        if (!value || typeof value !== 'string' ) {
            throw new Error('PhoneNumber invalid');
        }
        this.phoneNumber = value;
    }

    public getImage(): string {
        return this.image
    }
    public setImage(value:string): void {
        if(!value || typeof value !== "string"){
            throw new Error("Image invalid")
        }
        this.image = value
    }

    //Transforma o objeto em DB ou Model - teste




    public companieProfileToDB(): CompanieProfileDB{
        return{
            id: this.id,
            companie_id: this.companieId,
            name: this.name,
            description: this.description,
            address: this.address,
            phone_number: this.phoneNumber,
            image: this.image
        }
    }
    
    public companieProfileToModel(): CompanieProfileModel {
        return{
            id: this.id,
            companieId: this.companieId,
            name: this.name,
            description: this.description,
            address: this.address,
            phoneNumber: this.phoneNumber,
            image: this.image
        }
    }
}