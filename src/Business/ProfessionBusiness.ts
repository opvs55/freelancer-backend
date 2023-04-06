import {
    CreateProfessionInputDTO,
    CreateProfessionOutputDTO,
    DeleteProfessionInputDTO,
    EditProfessionInputDTO,
    GetAllProfessionInputDTO,
    GetAllProfessionOutputDTO,
    GetProfessionInputDTO,
    GetProfessionOutputDTO
} from "../DTO/interfaceDTO/ProfessionInterface";
import { ProfessionDataBase } from "../DataBase/ProfessionDataBase";
import { BadRequestError } from "../Errors/BadRequestError";
import { NotFoundError } from "../Errors/NotFoundError";
import { USER_ROLES } from "../Interfaces/Companie/Companie.types";
import { Profession } from "../Models/Companie/ProfessionModel";
import { IdGenerator } from "../Services/IdGenerator";
import { TokenManager } from "../Services/TokenManager";
import { validateParam } from "../Utils/Validate";


export class ProfessionBusiness {


    constructor(
        private ProfessionDataBase: ProfessionDataBase,
        private tokenManager: TokenManager,
        private idGenerator: IdGenerator
    ) { }

    public createProfession = async (input: CreateProfessionInputDTO): Promise<CreateProfessionOutputDTO> => {

        //pego o valor do input
        const {
            token,
            name,
            image
        } = input


        //verifico a typagem
        validateParam("token", token, "string")
        validateParam("name", name, "string")
        validateParam("image", image, "string")


        const id = this.idGenerator.generate()
        //monto meu objeto

        const newProfession = new Profession(

            id,
            name,
            image
        )

        //Modelo meu objeto e envio para o banco de dados

        const ProfessionDB = newProfession.professionToDB()
        await this.ProfessionDataBase.insert(ProfessionDB)



        //criou um objeto tipado

        const output: CreateProfessionOutputDTO = { mensage: "Cadastro feito com sucesso" }

        //retorno

        return output

    }


    public getProfession = async (input: GetProfessionInputDTO): Promise<GetProfessionOutputDTO> => {

        const { token, id } = input

        if (!token) {
            throw new BadRequestError("token ausente")
        }

        if (!id) {
            throw new BadRequestError("id ausente")
        }

        const payload = this.tokenManager.verifyToken(token)

        if (!payload) {
            throw new BadRequestError("token inválido")
        }

        const user = await this.ProfessionDataBase.getProfession(id)

        if (!user) {
            throw new NotFoundError("usuário não encontrado")
        }


        const output: GetProfessionOutputDTO = user

        return output
    }

    public getAllProfession = async (input: GetAllProfessionInputDTO): Promise<GetAllProfessionOutputDTO> => {

        const { token } = input

        if (!token) {
            throw new BadRequestError("token ausente")
        }


        const payload = this.tokenManager.verifyToken(token)

        if (!payload) {
            throw new BadRequestError("token inválido")
        }

        const user = await this.ProfessionDataBase.getAllProfession()

        if (!user) {
            throw new NotFoundError("usuário não encontrado")
        }


        const output: GetAllProfessionOutputDTO = user

        return output
    }


    public editProfession = async (input: EditProfessionInputDTO): Promise<void> => {

        const {
            idToEdit,
            token,
            name,
            image

        } = input

        if (token === undefined) {
            throw new BadRequestError("token ausente")
        }

        const payload = this.tokenManager.getPayload(token)

        if (payload == null) {
            throw new BadRequestError("token invalido")
        }


        const ProfessionDB = await this.ProfessionDataBase.findById(idToEdit)

        if (!ProfessionDB) {
            throw new NotFoundError("Id não encontrado")
        }


        const ProfessionEditada = new Profession(
            ProfessionDB.id,
            ProfessionDB.name,
            ProfessionDB.image
        )

        validateParam("token", token, "string")

        ProfessionEditada.setname(name ? name : ProfessionEditada.getName());
        ProfessionEditada.setImage(image ? image : ProfessionEditada.getImage());




        const upProfessionDB = ProfessionEditada.professionToDB()

        await this.ProfessionDataBase.updateProfession(idToEdit, upProfessionDB)
    }

    public deleteProfession = async (input: DeleteProfessionInputDTO): Promise<void> => {

        const { idToDelete, token } = input

        if (token === undefined) {
            throw new BadRequestError("token ausente")
        }

        const payload = this.tokenManager.getPayload(token)

        if (payload == null) {
            throw new BadRequestError("token invalido")
        }

        const professionDB = await this.ProfessionDataBase.findById(idToDelete)

        if (!professionDB) {
            throw new NotFoundError("Id não encontrado")
        }

        const creatorId = payload.id

        if (payload.role !== USER_ROLES.ADMIN && professionDB.id !== creatorId) {
            throw new BadRequestError("Apenas o user criador da postagem ou ADM's podem deletar!")
        }


        await this.ProfessionDataBase.deleteProfession(idToDelete)
    }


}
