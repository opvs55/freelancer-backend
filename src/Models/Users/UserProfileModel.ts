import {UserProfileDB, UserProfileModel} from "../../Interfaces/User/Users.Types";


export class UsersProfiles{
    constructor(
        private id:string,
        private userId:string,
        private firstName:string,
        private lastName:string,
        private address: string,
        private phoneNumber: string,
        private bio: string,
        private skills:string,
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

    public getFirstName(): string {
        return this.firstName
    }
    public setFirstName(value: string): void {
        if(!value || typeof value !== "string"){
            throw new Error("FirstName invalid")
        }
        this.firstName = value
    }

    public getLastName(): string {
        return this.lastName
    }
    public setLastName(value: string): void {
        if(!value || typeof value !== "string"){
            throw new Error("LastName invalid")
        }
        this.lastName = value
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

    public getBio(): string {
        return this.bio
    }
    public setBio(value: string): void {
        if(!value || typeof value !== "string"){
            throw new Error("Bio invalid");
            
        }
        this.bio = value
    }

    public getSkills(): string {
        return this.skills
    }
    public setSkills(value:string): void {
        if(!value || typeof value !== "string"){
            throw new Error("Skills invalid")
        }
        this.skills = value
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




    public userProfileToDB(): UserProfileDB{
        return{
            id: this.id,
            user_id: this.userId,
            first_name: this.firstName,
            last_name: this.lastName,
            address: this.address,
            phone_number: this.phoneNumber,
            bio: this.bio,
            skills: this.skills,
            image: this.image
        }
    }
    
    public userProfileToModel(): UserProfileModel {
        return{
            id: this.id,
            userId: this.userId,
            firstName: this.firstName,
            lastName: this.lastName,
            address: this.address,
            phoneNumber: this.phoneNumber,
            bio: this.bio,
            skills: this.skills,
            image: this.image
        }
    }
}