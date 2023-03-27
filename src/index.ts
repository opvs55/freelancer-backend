import express from "express"
import cors from "cors"
import dotenv from "dotenv"


dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())


app.listen(Number(process.env.PORT), () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
})



//começar o projeto
app.use("/users", userRouter)
app.use("/companies", postRouter)