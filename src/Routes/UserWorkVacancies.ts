import express from "express"
import { IdGenerator } from "../Services/IdGenerator"
import { TokenManager } from "../Services/TokenManager"
import { WorkVacanciesDataBase } from "../DataBase/WorkVacanciesDataBase"
import { UserWorkVacanciesController } from "../Controller/UserWorkVacanciesController"
import { UserWorkVacanciesBusiness } from "../Business/UserWorkVacanciesBusiness"
import { UserWorkVacanciesDataBase } from "../DataBase/UserWorkVacanciesDataBase"
import { UserProfileDataBase } from "../DataBase/UserProfileDataBase"
import { CompanieDataBase } from "../DataBase/CompanieDataBase"





export const userWorkVacanciesRouter = express.Router()


const userWorkVacanciesController = new UserWorkVacanciesController(
    new UserWorkVacanciesBusiness(
        new UserWorkVacanciesDataBase(),
        new WorkVacanciesDataBase(),
        new UserProfileDataBase(),
        new CompanieDataBase(),
        new TokenManager(),
        new IdGenerator()
    )
)

userWorkVacanciesRouter.post("/:companie_id/:work_vacancy_id/:userProfileId", userWorkVacanciesController.createUserWorkVacancies)
userWorkVacanciesRouter.get("/:id", userWorkVacanciesController.getUserWorkVacancies)
userWorkVacanciesRouter.get("/", userWorkVacanciesController.getAllUserWorkVacancies)
userWorkVacanciesRouter.put("/:id", userWorkVacanciesController.editUserWorkVacancies)
userWorkVacanciesRouter.delete("/:id", userWorkVacanciesController.deleteUserWorkVacancies)