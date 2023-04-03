import express from "express"
import { CompanieBusiness } from "../Business/CompanieBusiness"
import { CompanieController } from "../Controller/CompanieController"
import { CompanieDataBase } from "../DataBase/CompanieDataBase"
import { HashManager } from "../Services/HashManager"
import { IdGenerator } from "../Services/IdGenerator"
import { TokenManager } from "../Services/TokenManager"


export const companiesRouter = express.Router()


const companiesController = new CompanieController(
    new CompanieBusiness(
        new CompanieDataBase(),
        new IdGenerator(),
        new TokenManager(),
        new HashManager()
    )
)



companiesRouter.post("/signup", companiesController.signup)
companiesRouter.post("/login", companiesController.login)
companiesRouter.get("/:id", companiesController.getCompanie)
companiesRouter.get("/", companiesController.getAllCompanie)
companiesRouter.put("/:id", companiesController.editCompanie)
companiesRouter.delete("/:id", companiesController.deleteCompanie)