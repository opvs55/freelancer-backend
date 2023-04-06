import { CompanieDataBase } from "../DataBase/CompanieDataBase"
import {
    DeleteCompanieInputDTO,
    EditCompanieInputDTO,
    GetAllCompanieInputDTO,
    GetAllCompanieOutputDTO,
    GetCompanieInputDTO,
    GetCompanieOutputDTO,
    LoginCompanieInputDTO,
    LoginCompanieOutputDTO,
    SignUpCompanieInputDTO,
    SignUpCompanieOutputDTO
} from "../DTO/interfaceDTO/CompanieInterface"
import { BadRequestError } from "../Errors/BadRequestError"
import { NotFoundError } from "../Errors/NotFoundError"
import { CompanieDB, CompanieModel } from "../Interfaces/Companie/Companie.types"
import { TokenPayLoad, USER_ROLES } from "../Interfaces/User/Users.Types"
import { Companie } from "../Models/Companie/CompanieModel"
import { HashManager } from "../Services/HashManager"
import { IdGenerator } from "../Services/IdGenerator"
import { TokenManager } from "../Services/TokenManager"
import { validateParam } from "../Utils/Validate"



export class CompanieBusiness {


    constructor(
        private companieDataBase: CompanieDataBase,
        private idGenerator: IdGenerator,
        private tokenManager: TokenManager,
        private hashManager: HashManager
    ) { }

    public signup = async (input: SignUpCompanieInputDTO): Promise<SignUpCompanieOutputDTO> => {

        //pego o valor do input
        const {
            name,
            email,
            cellphone,
            address,
            description,
            password,
        } = input


        //verifico a typagem


        validateParam("username", name, "string")
        validateParam("email", email, "string")
        validateParam("cellphone", cellphone, "string")
        validateParam("address", address, "string")
        validateParam("description", description, "string")
        validateParam("password", password, "string")


        //declaro valores complementares

        const id = this.idGenerator.generate()
        const hashedPassword = await this.hashManager.hash(password)
        const role = USER_ROLES.NORMAL
        const createdAt = new Date().toISOString()
        const image = "Lauren Ipsum"


        //monto meu objeto

        const newCompanie = new Companie(
            id,
            name,
            email,
            cellphone,
            address,
            description,
            hashedPassword,
            role,
            image,
            createdAt
        )

        //Modelo meu objeto e envio para o banco de dados

        const companieDB = newCompanie.companieToDBModel()
        await this.companieDataBase.insert(companieDB)


        //Criou os dados do token

        const payload: TokenPayLoad = {
            id: newCompanie.getId(),
            username: newCompanie.getName(),
            role: newCompanie.getRole()
        }


        //criou o token com os dados

        const token = this.tokenManager.createToken(payload)


        //criou um objeto tipado

        const output: SignUpCompanieOutputDTO = {
            token
        }


        //retorno

        return output

    }

    public login = async (input: LoginCompanieInputDTO): Promise<LoginCompanieOutputDTO> => {

        const { email, password } = input

        validateParam("email", email, "string")
        validateParam("password", password, "string")

        const companieDB: CompanieDB | undefined = await this.companieDataBase.findByEmail(email)

        if (!companieDB) {
            throw new NotFoundError("email invalido")
        }

        const isPasswordCorrect = await this.hashManager.compare(password, companieDB.password)

        if (!isPasswordCorrect) {
            throw new BadRequestError("password incorreto")
        }

        const user = new Companie(
            companieDB.id,
            companieDB.name,
            companieDB.email,
            companieDB.cellphone,
            companieDB.address,
            companieDB.description,
            companieDB.password,
            companieDB.role,
            companieDB.image,
            companieDB.created_at
        )

        const payload: TokenPayLoad = {
            id: user.getId(),
            username: user.getName(),
            role: user.getRole()
        }

        const token = this.tokenManager.createToken(payload)

        const output: LoginCompanieOutputDTO = {
            token
        }

        return output
    }

    public getCompanie = async (input: GetCompanieInputDTO): Promise<GetCompanieOutputDTO> => {

        const { token, id } = input

        if (!token) {
            throw new BadRequestError("token ausente")
        }

        if (!id) {
            throw new BadRequestError("id do criador necessário")
        }


        const payload = this.tokenManager.getPayload(token)

        if (payload == null) {
            throw new BadRequestError("token invalido")
        }

        const companie: CompanieModel =
            await this.companieDataBase
                .getCompanie()

        const output: GetCompanieOutputDTO = companie

        return output
    }

    public getAllCompanie = async (input: GetAllCompanieInputDTO): Promise<GetAllCompanieOutputDTO> => {

        const { token } = input

        if (!token) {
            throw new BadRequestError("token ausente")
        }

        const payload = this.tokenManager.getPayload(token)

        if (payload == null) {
            throw new BadRequestError("token invalido")
        }

        const companie: CompanieModel[] =
            await this.companieDataBase
                .getAllCompanie()

        const output: GetAllCompanieOutputDTO = companie

        return output
    }

    public editCompanie = async (input: EditCompanieInputDTO): Promise<void> => {

        const {
            idToEdit,
            token,
            name,
            email,
            cellphone,
            address,
            description,
            password,
            image
        } = input

        if (token === undefined) {
            throw new BadRequestError("token ausente")
        }

        const payload = this.tokenManager.getPayload(token)

        if (payload == null) {
            throw new BadRequestError("token invalido")
        }


        const companieDB = await this.companieDataBase.findById(idToEdit)

        if (!companieDB) {
            throw new NotFoundError("Id não encontrado")
        }


        const companieEditada = new Companie(
            companieDB.id,
            companieDB.name,
            companieDB.email,
            companieDB.cellphone,
            companieDB.address,
            companieDB.description,
            companieDB.password,
            companieDB.role,
            companieDB.image,
            companieDB.created_at
        )

        companieEditada.setname(name ? name : companieEditada.getName());
        companieEditada.setEmail(email ? email : companieEditada.getEmail());
        companieEditada.setCellphone(cellphone ? cellphone : companieEditada.getCellphone());
        companieEditada.setAddress(address ? address : companieEditada.getAddress());
        companieEditada.setDescription(description ? description : companieEditada.getDescription());
        companieEditada.setPassword(password ? password : companieEditada.getPassword());
        companieEditada.setImage(image ? image : companieEditada.getImage());


        companieEditada.setCreateAt(new Date().toISOString())

        const upCompanieDB = companieEditada.companieToDBModel()

        await this.companieDataBase.updateCompanie(idToEdit, upCompanieDB)
    }

    public deleteCompanie = async (input: DeleteCompanieInputDTO): Promise<void> => {

        const { idToDelete, token } = input

        if (token === undefined) {
            throw new BadRequestError("token ausente")
        }

        const payload = this.tokenManager.getPayload(token)

        if (payload == null) {
            throw new BadRequestError("token invalido")
        }

        const companieDB = await this.companieDataBase.findById(idToDelete)

        if (!companieDB) {
            throw new NotFoundError("Id não encontrado")
        }

        const creatorId = payload.id

        if (payload.role !== USER_ROLES.ADMIN && companieDB.id !== creatorId) {
            throw new BadRequestError("Apenas o user criador da postagem ou ADM's podem deletar!")
        }


        await this.companieDataBase.deleteCompanie(idToDelete)
    }
}
