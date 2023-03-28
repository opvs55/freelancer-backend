import { Request, Response } from "express";
import { UserBusiness } from "../Business/UserBusiness";
import { LoginUserInputDTO, SignupUserInputDTO } from "../DTO/InterfaceDTO/User";
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
                cellphone: req.body.cellphone,
                address: req.body.address,
                password: req.body.password,
                skills: req.body.skills
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


    public login = async (req: Request, res: Response) =>{
        try{
            const input: LoginUserInputDTO= {
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
}