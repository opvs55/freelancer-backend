import { Request, Response } from "express";
import { BaseError } from "../Errors/BaseError";
import {
    CreateUserWorkVacanciesInputDTO,
    DeleteUserWorkVacanciesInputDTO,
    EditUserWorkVacanciesInputDTO,
    GetAllUserWorkVacanciesInputDTO,
    GetUserWorkVacanciesInputDTO
} from "../DTO/interfaceDTO/UserWorkVacanciesInterface";
import { UserWorkVacanciesBusiness } from "../Business/UserWorkVacanciesBusiness";



export class UserWorkVacanciesController {
    constructor(
        private userWorkVacanciesBusiness: UserWorkVacanciesBusiness
    ) { }

    public createUserWorkVacancies = async (req: Request, res: Response) => {
        try {
            const input: CreateUserWorkVacanciesInputDTO = {

                token: req.headers.authorization,
                userProfileId: req.params.userProfileId,
                work_vacancy_id: req.params.work_vacancy_id

            }

            const output = await this.userWorkVacanciesBusiness.createUserWorkVancancies(input)

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



    public getUserWorkVacancies = async (req: Request, res: Response) => {
        try {
            const input: GetUserWorkVacanciesInputDTO = {
                id: req.params.id,
                token: req.headers.authorization,
            }

            const output = await this.userWorkVacanciesBusiness.getUserWorkVacancies(input)

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


    public getAllUserWorkVacancies = async (req: Request, res: Response) => {
        try {
            const input: GetAllUserWorkVacanciesInputDTO = {
                token: req.headers.authorization
            }

            const output = await this.userWorkVacanciesBusiness.getAllUserWorkVacancies(input)

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


    public editUserWorkVacancies = async (req: Request, res: Response) => {
        try {

            const input: EditUserWorkVacanciesInputDTO = {

                token: req.headers.authorization,
                idToEdit: req.params.id,
                chosen: req.body.chosen,

            }

            await this.userWorkVacanciesBusiness.editUserWorkVacancies(input)

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

    public deleteUserWorkVacancies = async (req: Request, res: Response) => {
        try {

            const input: DeleteUserWorkVacanciesInputDTO = {
                idToDelete: req.params.id,
                token: req.headers.authorization
            }

            await this.userWorkVacanciesBusiness.deleteWorkVacancies(input)

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
