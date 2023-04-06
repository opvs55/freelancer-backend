import { UserDB, UserModel, USER_ROLES } from "../../Interfaces/User/Users.Types";


export class User{
    constructor(
        private id:string,
        private username:string,
        private email:string,
        private password:string,
        private role: USER_ROLES,
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
            password: this.password,
            role: this.role,
            created_at: this.createAt
        }
    }


    public toUserModel():UserModel{
        return{
            id: this.id,
            username: this.username,
            email: this.email,
            role: this.role,
            createdAt: this.createAt
        }
    }
    
}