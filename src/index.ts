import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { userRouter } from "./Routes/UserRouter"
import { companiesRouter } from "./Routes/CompaniesRouter"


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
// app.use("/companie", companieRouter)