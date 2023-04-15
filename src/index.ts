import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { userRouter } from "./Routes/UserRouter"
import { companiesRouter } from "./Routes/CompaniesRouter"
import { userProfileRouter } from "./Routes/UserProfileRouter"
import { userProfessionRouter } from "./Routes/UserProfessions"
import { professionRouter } from "./Routes/ProfessionsRouter"
import { workVacanciesRouter } from "./Routes/WorkVacancies"
import { userWorkVacanciesRouter } from "./Routes/UserWorkVacancies"
import { companieProfileRouter } from "./Routes/CompaniesProfileRouter"


dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())


app.listen(Number(process.env.PORT), () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
})



//começar o projeto
app.use("/user", userRouter)
app.use("/companie", companiesRouter)
app.use("/userProfile", userProfileRouter)
app.use("/companieProfile", companieProfileRouter)
app.use("/userProfession", userProfessionRouter)
app.use("/profession", professionRouter)
app.use("/workVacancies", workVacanciesRouter)
app.use("/userWorkVacancies", userWorkVacanciesRouter)
// app.use("/companie", companieRouter)





//fiz alterações em userProfiles e UserProfessions, estava cansado e posso ter feito alguma cagada,
//testar endpoints e criar em user profile um array que renderiza userprofessions :3