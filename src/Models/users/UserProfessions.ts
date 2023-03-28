import { UserProfessionsDB, UserProfessionsModel} from "../../Interfaces/Users/Users.type";


export class UsersProfessions{
    constructor(
        private id:string,
        private userId:string,
        private profession:string,
        private experienceYears:number,
        private username:string,
        private email: string,
        private cellphone:string,
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

    public getUserId(): string {
        return this.userId
    }
    public setUserId(value: string): void {
        if(!value || typeof value !== "string"){
            throw new Error("User_id invalid")
        }
        this.userId = value
    }

    public getProfession(): string {
        return this.profession
    }
    public setProfession(value: string): void {
        if(!value || typeof value !== "string"){
            throw new Error("Profission invalid")
        }
        this.profession = value
    }

    public getExperienceYears(): number {
        return this.experienceYears
    }
    public setExperienceYears(value: number): void {
        if(!value || typeof value !== "number"){
            throw new Error("Experience years invalid")
        }
        this.experienceYears = value
    }

    public getUsername(): string {
        return this.username
    }
    public setUsername(value: string): void {
        if (!value || typeof value !== "string"){
            throw(new Error("username invalid"))
        }
        this.username = value
    }

    public getEmail(): string {
        return this.email
    }
    public setEmail(value: string): void {
        if (!value || typeof value !== 'string' || !value.includes('@') || !value.includes('.')) {
            throw new Error('E-mail invalid');
        }
        this.email = value;
    }

    public getCellPhone(): string {
        return this.cellphone
    }
    public setCellPhone(value: string): void {
        if(!value || typeof value !== "string"){
            throw new Error("CellPhone invalid");
            
        }
        this.cellphone = value
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

    public toObject(type: string): UserProfessionsDB | UserProfessionsModel {
        if (type === 'db') {
            return {
                id: this.id,
                user_id: this.username,
                profession: this.profession,
                experiencie_years: this.experienceYears,
            };
        } else if (type === 'model') {
            return {
                id: this.id,
                userId: this.userId,
                profession: this.profession,
                experiencieYears: this.experienceYears,
                username: this.username,
                email : this.email,
                cellphone: this.cellphone,
                image: this.image
            };
        } else {
            throw new Error('Invalid type specified.');
        }
    }
    
}