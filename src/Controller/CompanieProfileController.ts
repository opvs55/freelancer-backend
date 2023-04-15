import { Request, Response } from "express";
import { GetUserInputDTO } from "../DTO/interfaceDTO/UserInterface";
import { BaseError } from "../Errors/BaseError";
import {
    CreateUserProfileInputDTO,
    DeleteUserProfileInputDTO,
    EditUserProfileInputDTO,
    GetAllUserProfileInputDTO
} from "../DTO/interfaceDTO/UserProfileInterface";
import { CompanieProfileBusiness } from "../Business/CompanieProfileBusiness";
import { CreateCompanieProfileInputDTO } from "../DTO/interfaceDTO/CompanieProfileInterface";
import { EditCompanieInputDTO } from "../DTO/interfaceDTO/CompanieInterface";
import { EditCompanieProfileInputDTO } from "../DTO/interfaceDTO/CompanieProfileInterface";




export class CompanieProfileController {
    constructor(
        private companieProfileBusiness: CompanieProfileBusiness
    ) { }

    public createCompanieProfile = async (req: Request, res: Response) => {
        try {
            const input: CreateCompanieProfileInputDTO = {

                token: req.headers.authorization,
                companie_id: req.params.companie_id,
                name: req.body.name,
                description: req.body.description,
                address: req.body.address,
                phone_number: req.body.phone_number,
                image: req.body.image

            }

            const output = await this.companieProfileBusiness.createProfile(input)

            res.status(201).send(output)

        } catch (error) {
            if (error instanceof BaseError) {
                console.log(error)
                res.status(error.statusCode).send(error.message)
            } else {
                console.log(error)
                res.status(500).send("erro inesperado")
            }
        }
    }



    public getCompanieProfile = async (req: Request, res: Response) => {
        try {
            const input: GetUserInputDTO = {
                token: req.headers.authorization,
                id: req.params.id
            }

            const output = await this.companieProfileBusiness.getCompanieProfile(input)

            res.status(200).send(output)

        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("erro inesperado")
            }
        }
    }



    public getAllCompanieProfile = async (req: Request, res: Response) => {
        try {
            const input: GetAllUserProfileInputDTO = {
                token: req.headers.authorization,
            }

            const output = await this.companieProfileBusiness.getAllUserProfile(input)

            res.status(200).send(output)

        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("erro inesperado")
            }
        }
    }





    public editCompanieProfile = async (req: Request, res: Response) => {
        try {

            const input: EditCompanieProfileInputDTO = {

                token: req.headers.authorization,
                idToEdit: req.params.id,
                name: req.body.ame,
                description: req.body.description,
                address: req.body.address,
                phone_number: req.body.phone_number,
                image: req.body.image

            }

            await this.companieProfileBusiness.editUserProfile(input)

            res.status(200).end()

        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("erro inesperado")
            }
        }
    }

    public deleteCompanieProfile = async (req: Request, res: Response) => {
        try {

            const input: DeleteUserProfileInputDTO = {
                idToDelete: req.params.id,
                token: req.headers.authorization
            }

            await this.companieProfileBusiness.deleteUserProfile(input)

            res.status(200).end()
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("erro inesperado")
            }
        }
    }
}
