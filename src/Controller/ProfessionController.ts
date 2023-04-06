import { Request, Response } from "express";
import { BaseError } from "../Errors/BaseError";
import { ProfessionBusiness } from "../Business/ProfessionBusiness";
import {
    CreateProfessionInputDTO,
    DeleteProfessionInputDTO,
    EditProfessionInputDTO,
    GetAllProfessionInputDTO,
    GetProfessionInputDTO
} from "../DTO/interfaceDTO/ProfessionInterface";


export class ProfessionController {
    constructor(
        private ProfessionBusiness: ProfessionBusiness
    ) { }

    public createProfession = async (req: Request, res: Response) => {
        try {
            const input: CreateProfessionInputDTO = {

                token: req.headers.authorization,
                name: req.body.name,
                image: req.body.image

            }

            const output = await this.ProfessionBusiness.createProfession(input)

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

    public getAllProfession = async (req: Request, res: Response) => {
        try {
            const input: GetAllProfessionInputDTO = {
                token: req.headers.authorization,
            }

            const output = await this.ProfessionBusiness.getAllProfession(input)

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

    public getProfession = async (req: Request, res: Response) => {
        try {
            const input: GetProfessionInputDTO = {
                token: req.headers.authorization,
                id: req.params.id
            }

            const output = await this.ProfessionBusiness.getProfession(input)

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


    public editProfession = async (req: Request, res: Response) => {
        try {

            const input: EditProfessionInputDTO = {

                token: req.headers.authorization,
                idToEdit: req.params.id,
                name: req.body.name,
                image: req.body.image

            }

            await this.ProfessionBusiness.editProfession(input)

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

    public deleteProfession = async (req: Request, res: Response) => {
        try {

            const input: DeleteProfessionInputDTO = {
                idToDelete: req.params.id,
                token: req.headers.authorization
            }

            await this.ProfessionBusiness.deleteProfession(input)

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
