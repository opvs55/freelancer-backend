import { UserDataBase } from "../DataBase/UserDataBase";
import { LoginUserInputDTO, LoginUserOutputDTO, SignUpUserOutputDTO, SignupUserInputDTO } from "../DTO/InterfaceDTO/User";
import { BadRequestError } from "../Errors/BadRequestError";
import { NotFoundError } from "../Errors/NotFoundError";
import { USER_ROLES } from "../Interfaces/Companie/Companie.types";
import { TokenPayLoad, UserDB } from "../Interfaces/User/Users.type";
import { User } from "../Models/Users/User";
import { HashManager } from "../Services/HashManager";
import { IdGenerator } from "../Services/IdGenerator";
import { TokenManager } from "../Services/TokenManager";
import { validateParam } from "../Utils/Validate";


export class UserBusiness {


    constructor(
        private userDataBase: UserDataBase,
        private idGenerator: IdGenerator,
        private tokenManager: TokenManager,
        private hashManager: HashManager
    ) { }

    public signup = async (input: SignupUserInputDTO): Promise<SignUpUserOutputDTO> => {

        //pego o valor do input
        const {
            username,
            email,
            cellphone,
            address,
            password,
            skills
        } = input


        //verifico a typagem


        validateParam("username", username, "string")
        validateParam("email", email, "string")
        validateParam("cellphone", cellphone, "string")
        validateParam("address", address, "string")
        validateParam("password", password, "string")
        validateParam("skills", skills, "string")


        //declaro valores complementares

        const id = this.idGenerator.generate()
        const hashedPassword = await this.hashManager.hash(password)
        const role = USER_ROLES.NORMAL
        const createdAt = new Date().toISOString()
        const image = "Lauren Ipsum"


        //monto meu objeto

        const newUser = new User(
            id,
            username,
            email,
            cellphone,
            address,
            hashedPassword,
            role,
            skills,
            image,
            createdAt
        )

        //Modelo meu objeto e envio para o banco de dados

        const userDB = newUser.userToDBModel()
        await this.userDataBase.insert(userDB)


        //Criou os dados do token

        const payload: TokenPayLoad = {
            id: newUser.getId(),
            username: newUser.getUserName(),
            role: newUser.getRole()
        }


        //criou o token com os dados

        const token = this.tokenManager.createToken(payload)


        //criou um objeto tipado

        const output: SignUpUserOutputDTO = {
            token
        }


        //retorno

        return output

    }

    public login = async(input:LoginUserInputDTO): Promise<LoginUserOutputDTO> =>{

        const { email, password} = input 

        validateParam("email", email, "string")
        validateParam("password", password, "string")

        const userDB : UserDB | undefined = await this.userDataBase.findByEmail(email)

        if(!userDB){
            throw new NotFoundError("email invalido")
        }

        const isPasswordCorrect = await this.hashManager.compare(password, userDB.password)

        if(!isPasswordCorrect){
            throw new BadRequestError("password incorreto")
        }

        const user = new User(
            userDB.id,
            userDB.username,
            userDB.email,
            userDB.cellphone,
            userDB.address,
            userDB.password,
            userDB.role,
            userDB.skills,
            userDB.image,
            userDB.created_at
        )

        const payload : TokenPayLoad = {
            id: user.getId(),
            username: user.getUserName(),
            role: user.getRole()
        }

        const token = this.tokenManager.createToken(payload)

        const output: LoginUserOutputDTO = {
            token
        }

        return output
    }

}