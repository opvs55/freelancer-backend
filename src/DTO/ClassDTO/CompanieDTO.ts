import { validateParam } from "../../Utils/Validate"
import { DeleteCompanieInputDTO, EditCompanieInputDTO, GetCompanieInputDTO, SignUpCompanieInputDTO } from "../interfaceDTO/CompanieInterface"


//=================================================/

//CLASSE - TESTANDO A FUNÇÃO DE VALIDAÇÃO, se der bom, atualizo para o projeto todo

export class CompanieDTO {


    public SignUPCompanieInputDTO = (
        username: unknown,
        email: unknown,
        password: unknown

    ): SignUpCompanieInputDTO => {

        validateParam("username", username, "string")
        validateParam("email", email, "string")
        validateParam("password", password, "string")

        const companie: SignUpCompanieInputDTO = {
            username:  username as string,
            email: email as string,
            password: password as string
        }


        return companie
    }

    public GetCompanieInputDTO = (
        token: unknown,
        id: unknown
    ): GetCompanieInputDTO => {

        validateParam("token", token, "string")
        validateParam("id", id, "string")

        const getCompanie = {
            token:token as string,
            id:id as string
        }

        return getCompanie
    }

    public EditCompanieInputDTO = (

        idToEdit: unknown,
        token: unknown,
        username: unknown,
        email: unknown,
        password: unknown

    ): EditCompanieInputDTO => {

        validateParam("idToEdiT", idToEdit, "string")
        validateParam("token", token, "string")
        validateParam("name", username, "string")
        validateParam("email", email, "string")
        validateParam("password", password, "string")

        const companie = {
            idToEdit: idToEdit as string,
            token: token as string,
            username: username as string,
            email: email as string,
            password: password as string
        }

        return companie
    }

    public DeleteCompanieInputDTO = (
        idToDelete: unknown,
        token: unknown
    ): DeleteCompanieInputDTO => {

        validateParam("token", token, "string")
        validateParam("idToDelete", idToDelete, "string")

        const deleteCompanie = {
            idToDelete: idToDelete as string,
            token: token as string
        }

        return deleteCompanie
    }

}


