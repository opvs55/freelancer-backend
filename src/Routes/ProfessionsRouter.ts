import express from "express"
import { ProfessionBusiness } from "../Business/ProfessionBusiness";
import { ProfessionController } from "../Controller/ProfessionController";
import { ProfessionDataBase } from "../DataBase/ProfessionDataBase";
import { IdGenerator } from "../Services/IdGenerator";
import { TokenManager } from "../Services/TokenManager";


export const professionRouter = express.Router()

const professionController = new ProfessionController(
    new ProfessionBusiness(
        new ProfessionDataBase(),
        new TokenManager(),
        new IdGenerator()
    )
)


professionRouter.post("/", professionController.createProfession)
professionRouter.get("/", professionController.getAllProfession)
professionRouter.get("/:id", professionController.getProfession)
professionRouter.put("/:id", professionController.editProfession)
professionRouter.delete("/:id", professionController.deleteProfession)