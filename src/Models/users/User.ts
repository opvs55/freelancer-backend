import { UserDB, UserModel, USER_ROLES } from "../../Interfaces/Users/Users.type";


export class Users{
    constructor(
        private id:string,
        private username:string,
        private email:string,
        private cellphone:string,
        private address:string,
        private password:string,
        private role: USER_ROLES,
        private skills: string,
        private image: string,
        private createAt: string
    ){}

    public getId(): string {
        return this.id
    }
    public setId(value: string): void {
        this.id = value
    }

    public getUserName(): string {
        return this.username
    }
    public setUsername(value: string): void {
        this.username = value
    }

    public getEmail(): string {
        return this.email
    }
    public setEmail(value: string): void {
        this.email = value
    }

    public getCellPhone(): string {
        return this.cellphone
    }
    public setCellPhone(value: string): void {
        this.cellphone = value
    }

    public getAddress(): string {
        return this.address
    }
    public setAddress(value: string): void {
        this.address = value
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

    public getSkills():string{
        return this.skills
    }

    public setSkills(value:string):void{
        this.skills = value
    }

    public getImage(): string {
        return this.image
    }
    public setImage(value:string): void {
        this.image = value
    }
    public getCreateAt(): string {
        return this.createAt
    }
    public setCreateAt(value:string): void {
        this.createAt = value
    }


    //modelo labenu - teste

    public userToDBModel():UserDB{
        return{
            id: this.id,
            username: this.username,
            email: this.email,
            cellphone: this.cellphone,
            address: this.address,
            password: this.password,
            role: this.role,
            skills: this.skills,
            image: this.image,
            created_at: this.createAt
        }
    }


    public toUserModel():UserModel{
        return{
            id: this.id,
            username: this.username,
            email: this.email,
            password: this.password,
            cellphone: this.cellphone,
            address : this.address,
            role: this.role,
            skills: this.skills,
            image: this.image,
            createdAt: this.createAt
        }
    }
    
}