import { validateParam } from "../../Utils/Validate"
import { CreateProfessionInputDTO, DeleteProfessionInputDTO, EditProfessionInputDTO, GetProfessionInputDTO } from "../InterfaceDTO/ProfessionInterface"


//=================================================/

//CLASSE - TESTANDO A FUNÇÃO DE VALIDAÇÃO, se der bom, atualizo para o projeto todo

export class ProfessionDTO {


    public CreateProfessionInputDTO = (
        name: unknown,
        image: unknown

    ): CreateProfessionInputDTO => {

        validateParam("name", name, "string")
        validateParam("image", image, "string")

        const profession: CreateProfessionInputDTO = {
            token: name as string,
            name: name as string,
            image: image as string
        }


        return profession
    }

    public GetProfessionInputDTO = (
        token: unknown,
        id: unknown
    ): GetProfessionInputDTO=> {

        validateParam("token", token, "string")
        validateParam("id", id, "string")

        const getProfession = {
            token:token as string,
            id:id as string
        }

        return getProfession
    }

    public EditCompanieInputDTO = (

        idToEdit: unknown,
        token: unknown,
        name: unknown,
        image: unknown

    ): EditProfessionInputDTO=> {

        validateParam("idToEdiT", idToEdit, "string")
        validateParam("token", token, "string")
        validateParam("name", name, "string")
        validateParam("image", image, "string")

        const profession = {
            idToEdit: idToEdit as string,
            token: token as string,
            name: name as string,
            image: image as string,
        }

        return profession
    }

    public DeleteProfessionInputDTO = (
        idToDelete: unknown,
        token: unknown
    ): DeleteProfessionInputDTO=> {

        validateParam("token", token, "string")
        validateParam("idToDelete", idToDelete, "string")

        const deleteProfession = {
            idToDelete: idToDelete as string,
            token: token as string
        }

        return deleteProfession
    }

}


