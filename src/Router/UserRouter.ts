import express from "express"
import { UserBusiness } from "../Business/UserBusiness"
import { UserController } from "../Controller/UserController"
import { UserDataBase } from "../DataBase/UserDataBase"
import { HashManager } from "../Services/HashManager"
import { IdGenerator } from "../Services/IdGenerator"
import { TokenManager } from "../Services/TokenManager"





export const userRouter = express.Router()


const userController = new UserController(
    new UserBusiness(
        new UserDataBase(),
        new IdGenerator(),
        new TokenManager(),
        new HashManager()
    )
)



userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)
// userRouter.get("/perfilpage", userController.perfilpage)