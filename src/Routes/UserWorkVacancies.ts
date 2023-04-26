import express from "express"
import { IdGenerator } from "../Services/IdGenerator"
import { TokenManager } from "../Services/TokenManager"

import { UserWorkVacanciesController } from "../Controller/UserWorkVacanciesController"
import { UserWorkVacanciesBusiness } from "../Business/UserWorkVacanciesBusiness"
import { UserWorkVacanciesDataBase } from "../DataBase/UserWorkVacanciesDataBase"
import { UserProfileDataBase } from "../DataBase/UserProfileDataBase"
import { UserProfessionDataBase } from "../DataBase/UserProfessionDataBase"
import { WorkVacanciesDataBase } from "../DataBase/WorkVacanciesDataBase"
import { CompanieProfileDataBase } from "../DataBase/CompanieProfileDataBase"





export const userWorkVacanciesRouter = express.Router()


const userWorkVacanciesController = new UserWorkVacanciesController(
    new UserWorkVacanciesBusiness(
        new UserWorkVacanciesDataBase(),
        new WorkVacanciesDataBase(),
        new UserProfessionDataBase(),
        new UserProfileDataBase(),
        new CompanieProfileDataBase(),
        new TokenManager(),
        new IdGenerator()
    )
)

userWorkVacanciesRouter.post("/:companie_id/:work_vacancy_id/:user_id", userWorkVacanciesController.createUserWorkVacancies)
userWorkVacanciesRouter.get("/:id", userWorkVacanciesController.getUserWorkVacancies)
userWorkVacanciesRouter.get("/", userWorkVacanciesController.getAllUserWorkVacancies)
userWorkVacanciesRouter.put("/:id", userWorkVacanciesController.editUserWorkVacancies)
userWorkVacanciesRouter.delete("/:id", userWorkVacanciesController.deleteUserWorkVacancies)