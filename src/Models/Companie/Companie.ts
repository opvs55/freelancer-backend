import { CompanieDB, CompanieModel, USER_ROLES } from "../../Interfaces/Companie/Companie.types";


export class Companie{


    constructor(

        private id:string,
        private name:string,
        private email:string,
        private cellphone:string,
        private address:string,
        private description:string,
        private password:string,
        private role:USER_ROLES,
        private image:string,
        private createAt:string,

    ){}

    public getId(): string {
        return this.id
    }
    public setId(value: string): void {
        this.id = value
    }

    public getName(): string {
        return this.name
    }
    public setname(value: string): void {
        this.name = value
    }

    public getEmail(): string {
        return this.email
    }
    public setEmail(value: string): void {
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

    public setAddress(value:string):void{
        this.address = value
    }

    public getDescription():string{
        return this.description
    }

    public setDescription(value:string):void{
        this.description = value
    }

    public getPassword(): string {
        return this.password
    }
    public setPassword(value: string): void {
        this.password = value
    }

    public getRole(): USER_ROLES {
        return this.role
    }
    public setRole(value:USER_ROLES): void {
        this.id = value
    }

    public getImage():string{
        return this.image
    }

    public setImage(value:string):void{
        this.image = value
    }

    public getCreateAt(): string {
        return this.createAt
    }
    public setCreateAt(value:string): void {
        this.createAt = value
    }


    public companieToDBModel():CompanieDB{
        return{
            id: this.id,
            name: this.name,
            email: this.email,
            cellphone: this.cellphone,
            address:this.address,
            description:this.description,
            password: this.password,
            role: this.role,
            image: this.image,
            created_at: this.createAt
        }
    }


    public toCompanieModel():CompanieModel{
        return{
            id: this.id,
            name: this.name,
            email: this.email,
            cellphone: this.cellphone,
            address:this.address,
            description:this.description,
            password: this.password,
            role: this.role,
            image: this.image,
            createdAt: this.createAt
        }
    }
    
}