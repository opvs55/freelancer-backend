import { Request, Response } from "express";
import { BaseError } from "../Errors/BaseError";
import {
    CreateWorkVacanciesInputDTO,
    DeleteWorkVacanciesInputDTO,
    EditWorkVacanciesInputDTO,
    GetWorkVacanciesByIdInputDTO,
    GetWorkVacanciesInputDTO
} from "../DTO/interfaceDTO/WorkVacanciesInterface";
import { WorkVacanciesBusiness } from "../Business/WorkVacanciesBusiness";



export class WorkVacanciesController {
    constructor(
        private workVacanciesBusiness: WorkVacanciesBusiness
    ) { }

    public createWorkVacancies = async (req: Request, res: Response) => {
        try {
            const input: CreateWorkVacanciesInputDTO = {

                token: req.headers.authorization,
                companie_id: req.params.companie_id,
                title: req.body.title,
                description: req.body.description,
                skills_required: req.params.profession_id,
                location: req.body.location,
                salary: req.body.salary,
            }

            const output = await this.workVacanciesBusiness.createWorkVancancies(input)

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



    public getWorkVacancies = async (req: Request, res: Response) => {
        try {
            const input: GetWorkVacanciesByIdInputDTO = {
                token: req.headers.authorization,
                id: req.params.id
            }

            const output = await this.workVacanciesBusiness.getWorkVacancies(input)

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

    public getAllWorkVacancies = async (req: Request, res: Response) => {
        try {
            const input: GetWorkVacanciesInputDTO = {
                token: req.headers.authorization,
            }

            const output = await this.workVacanciesBusiness.getAllWorkVacancies(input)

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


    public editWorkVacancies = async (req: Request, res: Response) => {
        try {

            const input: EditWorkVacanciesInputDTO = {

                token: req.headers.authorization,
                idToEdit: req.params.id,
                title: req.body.title,
                description: req.body.description,
                location: req.body.location,
                salary: req.body.salary,

            }

            await this.workVacanciesBusiness.editWorkVacancies(input)

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

    public deleteWorkVacancies = async (req: Request, res: Response) => {
        try {

            const input: DeleteWorkVacanciesInputDTO = {
                idToDelete: req.params.id,
                token: req.headers.authorization
            }

            await this.workVacanciesBusiness.deleteWorkVacancies(input)

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
