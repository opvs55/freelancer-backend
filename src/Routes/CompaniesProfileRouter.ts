import express from "express"
import { IdGenerator } from "../Services/IdGenerator"
import { TokenManager } from "../Services/TokenManager"


import { CompanieProfileController } from "../Controller/CompanieProfileController"
import { CompanieProfileDataBase } from "../DataBase/CompanieProfileDataBase"
import { CompanieProfileBusiness } from "../Business/CompanieProfileBusiness"





export const companieProfileRouter = express.Router()


const companieProfileController = new CompanieProfileController(
    new CompanieProfileBusiness(
        new CompanieProfileDataBase(),
        new TokenManager(),
        new IdGenerator()
    )
)

companieProfileRouter.post("/:companie_id", companieProfileController.createCompanieProfile)
companieProfileRouter.get("/", companieProfileController.getAllCompanieProfile)
companieProfileRouter.get("/:id", companieProfileController.getCompanieProfile)
companieProfileRouter.put("/:id", companieProfileController.editCompanieProfile)
companieProfileRouter.delete("/:id", companieProfileController.deleteCompanieProfile)