import { Request, Response } from "express";
import { UserBusiness } from "../Business/UserBusiness";
import {
    DeleteUserInputDTO,
    EditUserInputDTO,
    GetAllUserInputDTO,
    GetUserInputDTO,
    LoginUserInputDTO,
    SignupUserInputDTO
} from "../DTO/interfaceDTO/UserInterface";
import { BaseError } from "../Errors/BaseError";



export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) { }

    public signup = async (req: Request, res: Response) => {
        try {
            const input: SignupUserInputDTO = {

                username: req.body.username,
                email: req.body.email,
                password: req.body.password,

            }

            const output = await this.userBusiness.signup(input)

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
            const input: LoginUserInputDTO = {
                email: req.body.email,
                password: req.body.password
            }

            const output = await this.userBusiness.login(input)

            res.status(200).send(output)
        } catch (error) {
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("erro inesperado")
            }
        }
    }

    public getUser = async (req: Request, res: Response) => {
        try {
            const input: GetUserInputDTO = {
                token: req.headers.authorization,
                id: req.params.id
            }

            const output = await this.userBusiness.getUser(input)

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

    public getAllUser = async (req: Request, res: Response) => {
        try {
            const input: GetAllUserInputDTO = {
                token: req.headers.authorization
            }


            const output = await this.userBusiness.getAllUser(input)

            res.status(200).send(output)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("error inespperado")
            }
        }
    }

    public editUser = async (req: Request, res: Response) => {
        try {

            const input: EditUserInputDTO = {

                idToEdit: req.params.id,
                token: req.headers.authorization,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }

            await this.userBusiness.editUser(input)

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

            const input: DeleteUserInputDTO = {
                idToDelete: req.params.id,
                token: req.headers.authorization
            }

            await this.userBusiness.deleteUser(input)

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
