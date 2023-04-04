import { ProfessionDB, ProfessionModel } from "../../Interfaces/Profession/Profession.Types";


export class Profession {


    constructor(

        private id: string,
        private name: string,
        private image: string

    ) { }

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

    public getImage(): string {
        return this.image
    }

    public setImage(value: string): void {
        this.image = value
    }
    public professionToDB(): ProfessionDB {
        return {

            id: this.id,
            name: this.name,
            image: this.image
        }
    }


    public toProfessionModel(): ProfessionModel {
        return {
            id: this.id,
            name: this.name,
            image: this.image
        }
    }

}