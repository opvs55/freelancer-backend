import {
    DeleteUserInputDTO,
    EditUserInputDTO,
    GetAllUserInputDTO,
    GetAllUserOutputDTO,
    GetUserInputDTO,
    GetUserOutputDTO,
    LoginUserInputDTO,
    LoginUserOutputDTO,
    SignUpUserOutputDTO,
    SignupUserInputDTO
} from "../DTO/InterfaceDTO/UserInterface";
import { UserDataBase } from "../DataBase/UserDataBase";
import { BadRequestError } from "../Errors/BadRequestError";
import { NotFoundError } from "../Errors/NotFoundError";
import { USER_ROLES } from "../Interfaces/Companie/Companie.Types";
import { TokenPayLoad, UserDB, UserModel } from "../Interfaces/User/Users.Types";
import { User } from "../Models/Users/UserModel";
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
            password
        } = input


        //verifico a typagem


        validateParam("username", username, "string")
        validateParam("email", email, "string")
        validateParam("password", password, "string")


        //declaro valores complementares

        const id = this.idGenerator.generate()
        const hashedPassword = await this.hashManager.hash(password)
        const role = USER_ROLES.NORMAL
        const createdAt = new Date().toISOString()


        //monto meu objeto

        const newUser = new User(
            id,
            username,
            email,
            hashedPassword,
            role,
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

    public login = async (input: LoginUserInputDTO): Promise<LoginUserOutputDTO> => {

        const { email, password } = input

        validateParam("email", email, "string")
        validateParam("password", password, "string")

        const userDB: UserDB | undefined = await this.userDataBase.findByEmail(email)

        if (!userDB) {
            throw new NotFoundError("email invalido")
        }

        const isPasswordCorrect = await this.hashManager.compare(password, userDB.password)

        if (!isPasswordCorrect) {
            throw new BadRequestError("password incorreto")
        }

        const user = new User(
            userDB.id,
            userDB.username,
            userDB.email,
            userDB.password,
            userDB.role,
            userDB.created_at
        )

        const payload: TokenPayLoad = {
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

    public getUser = async (input: GetUserInputDTO): Promise<GetUserOutputDTO> => {

        const { token, id } = input

        if (!token) {
            throw new BadRequestError("token ausente")
        }

        if (!id) {
            throw new BadRequestError("id cadastrado necessário")
        }


        const payload = this.tokenManager.getPayload(token)

        if (payload == null) {
            throw new BadRequestError("token invalido")
        }

        const user: UserModel =
            await this.userDataBase
                .getUser()

        const output: GetUserOutputDTO = user

        return output
    }
    public getAllUser = async (input: GetAllUserInputDTO): Promise<GetAllUserOutputDTO> => {

        const { token } = input

        if (!token) {
            throw new BadRequestError("token ausente")
        }


        const payload = this.tokenManager.getPayload(token)

        if (payload == null) {
            throw new BadRequestError("token invalido")
        }

        const user: UserModel[] =
            await this.userDataBase
                .getAllUser()

        const output: GetAllUserOutputDTO = user

        return output
    }

    public editUser = async (input: EditUserInputDTO): Promise<void> => {

        const {
            idToEdit,
            token,
            username,
            email,
            password
        } = input

        if (token === undefined) {
            throw new BadRequestError("token ausente")
        }

        const payload = this.tokenManager.getPayload(token)

        if (payload == null) {
            throw new BadRequestError("token invalido")
        }


        const userDB = await this.userDataBase.findById(idToEdit)

        if (!userDB) {
            throw new NotFoundError("Id não encontrado")
        }


        const userEditada = new User(
            userDB.id,
            userDB.username,
            userDB.email,
            userDB.password,
            userDB.role,
            userDB.created_at
        )

        userEditada.setUsername(username ? username : userEditada.getUserName());
        userEditada.setEmail(email ? email : userEditada.getEmail());
        userEditada.setPassword(password ? password : userEditada.getPassword());



        userEditada.setCreateAt(new Date().toISOString())

        const upUserDB = userEditada.userToDBModel()

        await this.userDataBase.updateUser(idToEdit, upUserDB)
    }

    public deleteUser = async (input: DeleteUserInputDTO): Promise<void> => {

        const { idToDelete, token } = input

        if (token === undefined) {
            throw new BadRequestError("token ausente")
        }

        const payload = this.tokenManager.getPayload(token)

        if (payload == null) {
            throw new BadRequestError("token invalido")
        }

        const userDB = await this.userDataBase.findById(idToDelete)

        if (!userDB) {
            throw new NotFoundError("Id não encontrado")
        }

        const creatorId = payload.id

        if (payload.role !== USER_ROLES.ADMIN && userDB.id !== creatorId) {
            throw new BadRequestError("Apenas o user criador da postagem ou ADM's podem deletar!")
        }


        await this.userDataBase.deleteUser(idToDelete)
    }


}