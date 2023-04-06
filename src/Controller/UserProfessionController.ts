import { Request, Response } from "express";
import { BaseError } from "../Errors/BaseError";
import {
    CreateUserProfessionInputDTO,
    DeleteUserProfessionInputDTO,
    EditUserProfessionInputDTO,
    GetAllUserProfessionInputDTO,
    GetUserProfessionInputDTO
} from "../DTO/interfaceDTO/UserProfessionInterface";
import { UserProfessionBusiness } from "../Business/UserProfessionBusiness";



export class UserProfessionController {
    constructor(
        private userProfessionBusiness: UserProfessionBusiness
    ) { }

    public createUserProfession = async (req: Request, res: Response) => {
        try {
            const input: CreateUserProfessionInputDTO = {

                token: req.headers.authorization,
                user_id: req.params.user_id,
                profession_id: req.params.profession_id,
                experience_years: req.body.experience_years

            }

            const output = await this.userProfessionBusiness.createProfession(input)

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



    public getUserProfession = async (req: Request, res: Response) => {
        try {
            const input: GetUserProfessionInputDTO = {
                token: req.headers.authorization,
                id: req.params.id
            }

            const output = await this.userProfessionBusiness.getUserProfession(input)

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

    public getAllUserProfession = async (req: Request, res: Response) => {
        try {
            const input: GetAllUserProfessionInputDTO = {
                token: req.headers.authorization,
            }

            const output = await this.userProfessionBusiness.getAllUserProfession(input)

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


    public editUserProfession = async (req: Request, res: Response) => {
        try {

            const input: EditUserProfessionInputDTO = {

                token: req.headers.authorization,
                idToEdit: req.params.id,
                experience_years: req.body.experience_years

            }

            await this.userProfessionBusiness.editUserProfession(input)

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

    public deleteUser = async (req: Request, res: Response) => {
        try {

            const input: DeleteUserProfessionInputDTO = {
                idToDelete: req.params.id,
                token: req.headers.authorization
            }

            await this.userProfessionBusiness.deleteUserProfession(input)

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
