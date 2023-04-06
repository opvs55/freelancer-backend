import express from "express"
import { IdGenerator } from "../Services/IdGenerator"
import { TokenManager } from "../Services/TokenManager"
import { WorkVacanciesController } from "../Controller/WorkVacanciesController"
import { WorkVacanciesBusiness } from "../Business/WorkVacanciesBusiness"
import { WorkVacanciesDataBase } from "../DataBase/WorkVacanciesDataBase"





export const workVacanciesRouter = express.Router()


const workVacanciesController = new WorkVacanciesController(
    new WorkVacanciesBusiness(
        new WorkVacanciesDataBase(),
        new TokenManager(),
        new IdGenerator()
    )
)

workVacanciesRouter.post("/:company_id", workVacanciesController.createWorkVacancies)
workVacanciesRouter.get("/:id", workVacanciesController.getWorkVacancies)
workVacanciesRouter.get("/", workVacanciesController.getAllWorkVacancies)
workVacanciesRouter.put("/:id", workVacanciesController.editWorkVacancies)
workVacanciesRouter.delete("/:id", workVacanciesController.deleteWorkVacancies)