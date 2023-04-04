import express from "express"
import { IdGenerator } from "../Services/IdGenerator"
import { TokenManager } from "../Services/TokenManager"
import { UserProfileController } from "../Controller/UserProfileController"
import { UserProfileBusiness } from "../Business/UserProfileBusiness"
import { UserProfileDataBase } from "../DataBase/UserProfileDataBase"





export const userProfileRouter = express.Router()


const userProfileController = new UserProfileController(
    new UserProfileBusiness(
        new UserProfileDataBase(),
        new TokenManager(),
        new IdGenerator()
    )
)

userProfileRouter.post("/:user_id", userProfileController.createUserProfile)
userProfileRouter.get("/:id", userProfileController.getUserProfile)
userProfileRouter.put("/:id", userProfileController.editUserProfile)
userProfileRouter.delete("/:id", userProfileController.deleteUser)