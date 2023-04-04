import { Request, Response } from "express";
import { GetUserInputDTO } from "../DTO/interfaceDTO/UserInterface";
import { BaseError } from "../Errors/BaseError";
import { CreateUserProfileInputDTO, DeleteUserProfileInputDTO, EditUserProfileInputDTO } from "../DTO/interfaceDTO/UserProfileInterface";
import { UserProfileBusiness } from "../Business/UserProfileBusiness";



export class UserProfileController {
    constructor(
        private userProfileBusiness: UserProfileBusiness
    ) { }

    public createUserProfile = async (req: Request, res: Response) => {
        try {
            const input: CreateUserProfileInputDTO = {

                token: req.headers.authorization,
                user_id: req.params.user_id,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                address: req.body.address,
                phone_number: req.body.phone_number,
                bio: req.body.bio,
                skills: req.body.skills,
                image:req.body.image
                
            }

            const output = await this.userProfileBusiness.createProfile(input)

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



    public getUserProfile = async (req: Request, res: Response) => {
        try {
            const input: GetUserInputDTO = {
                token: req.headers.authorization,
                id: req.params.id
            }

            const output = await this.userProfileBusiness.getUserProfile(input)

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


    public editUserProfile = async (req: Request, res: Response) => {
        try {

            const input: EditUserProfileInputDTO = {

                token: req.headers.authorization,
                idToEdit: req.params.id,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                address: req.body.address,
                phone_number: req.body.phone_number,
                bio: req.body.bio,
                skills: req.body.skills,
                image:req.body.image
                
            }

            await this.userProfileBusiness.editUserProfile(input)

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

            const input: DeleteUserProfileInputDTO = {
                idToDelete: req.params.id,
                token: req.headers.authorization
            }

            await this.userProfileBusiness.deleteUserProfile(input)

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