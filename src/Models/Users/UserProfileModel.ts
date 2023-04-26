import {UserProfessionDB, UserProfessionModel, UserProfileDB, UserProfileModel} from "../../Interfaces/User/Users.Types";


export class UsersProfiles{
    constructor(
        public id:string,
        public userId:string,
        public firstName:string,
        public lastName:string,
        public address: string,
        public phoneNumber: string,
        public bio: string,
        public skills: UserProfessionDB[],
        public image:string
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

    public getSkills(): UserProfessionDB[] {
        return this.skills
    }
    public setSkills(value:UserProfessionDB[] ): void {
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