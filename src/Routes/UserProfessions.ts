import express from "express"
import { IdGenerator } from "../Services/IdGenerator"
import { TokenManager } from "../Services/TokenManager"
import { UserProfessionController } from "../Controller/UserProfessionController"
import { UserProfessionBusiness } from "../Business/UserProfessionBusiness"
import { UserProfessionDataBase } from "../DataBase/UserProfessionDataBase"


export const userProfessionRouter = express.Router()


const userProfessionController = new UserProfessionController(
    new UserProfessionBusiness(
        new UserProfessionDataBase(),
        new TokenManager(),
        new IdGenerator()
    )
)


userProfessionRouter.post("/:user_id/:profession_id", userProfessionController.createUserProfession)
userProfessionRouter.get("/:id", userProfessionController.getUserProfession)
userProfessionRouter.get("/", userProfessionController.getAllUserProfession)
userProfessionRouter.put("/:id", userProfessionController.editUserProfession)
userProfessionRouter.delete("/:id", userProfessionController.deleteUser)
