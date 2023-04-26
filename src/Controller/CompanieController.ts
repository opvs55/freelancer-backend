import { Request, Response } from "express";
import { CompanieBusiness } from "../Business/CompanieBusiness";
import {
    DeleteCompanieInputDTO,
    EditCompanieInputDTO,
    GetAllCompanieInputDTO,
    GetCompanieInputDTO,
    LoginCompanieInputDTO,
    SignUpCompanieInputDTO
} from "../DTO/interfaceDTO/CompanieInterface";
import { BaseError } from "../Errors/BaseError";



export class CompanieController {
    constructor(
        private companieBusiness: CompanieBusiness
    ) { }

    public signup = async (req: Request, res: Response) => {
        try {
            const input: SignUpCompanieInputDTO = {

                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }

            const output = await this.companieBusiness.signup(input)

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


    public login = async (req: Request, res: Response) => {
        try {
            const input: LoginCompanieInputDTO = {
                email: req.body.email,
                password: req.body.password
            }

            const output = await this.companieBusiness.login(input)

            res.status(200).send(output)
        } catch (error) {
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("erro inesperado")
                console.log(error)
            }
        }
    }

    public getCompanie = async (req: Request, res: Response) => {
        try {
            const input: GetCompanieInputDTO = {

                token: req.headers.authorization,
                id: req.params.id
            }

            const output = await this.companieBusiness.getCompanie(input)

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

    public getAllCompanie = async (req: Request, res: Response) => {
        try {
            const input: GetAllCompanieInputDTO = {
                token: req.headers.authorization,
            }

            const output = await this.companieBusiness.getAllCompanie(input)

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

    public editCompanie = async (req: Request, res: Response) => {
        try {

            const input: EditCompanieInputDTO = {

                idToEdit: req.params.id,
                token: req.headers.authorization,
                username: req.body.username,
                email: req.body.email,
                password: req.body.passowrd
            }

            await this.companieBusiness.editCompanie(input)

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

    public deleteCompanie = async (req: Request, res: Response) => {
        try {

            const input: DeleteCompanieInputDTO = {
                idToDelete: req.params.id,
                token: req.headers.authorization
            }

            await this.companieBusiness.deleteCompanie(input)

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
