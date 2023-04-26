import { validateParam } from "../../Utils/Validate"
import { DeleteCompanieInputDTO, EditCompanieInputDTO, GetCompanieInputDTO, SignUpCompanieInputDTO } from "../interfaceDTO/CompanieInterface"
import { CreateCompanieProfileInputDTO, DeleteCompanieProfileInputDTO, EditCompanieProfileInputDTO, GetCompanieProfileInputDTO } from "../interfaceDTO/CompanieProfileInterface"


//=================================================/

//CLASSE - TESTANDO A FUNÇÃO DE VALIDAÇÃO, se der bom, atualizo para o projeto todo

export class CompanieProfileDTO {


    public CreateCompanieProfileDTO = (
        token: unknown,
        companie_id: unknown,
        name: unknown,
        description: unknown,
        address: unknown,
        phone_number: unknown,
        image: unknown

    ): CreateCompanieProfileInputDTO => {


        validateParam("token", token, "string")
        validateParam("companie_id", companie_id, "string")
        validateParam("name", name, "string")
        validateParam("description", description, "string")
        validateParam("address", address, "string")
        validateParam("phone_number", phone_number, "string")
        validateParam("image", image, "string")


        const companieProfile: CreateCompanieProfileInputDTO = {
            token: token as string,
            companie_id: companie_id as string,
            name: name as string,
            description: description as string,
            address: address as string,
            phone_number: phone_number as string,
            image: image as string
        }


        return companieProfile
    }

    public GetCompanieProfileInputDTO = (
        token: unknown,
        id: unknown

    ): GetCompanieProfileInputDTO => {

        validateParam("token", token, "string")
        validateParam("id", id, "string")

        const getCompanieProfile = {
            token: token as string,
            id: id as string
        }

        return getCompanieProfile
    }

    public EditCompanieProfileInputDTO = (

        idToEdit: unknown,
        token: unknown,
        name: unknown,
        description: unknown,
        address: unknown,
        phone_number: unknown,
        image: unknown


    ): EditCompanieProfileInputDTO => {

        validateParam("token", token, "string")
        validateParam("idToEdit", idToEdit, "string")
        validateParam("description", description, "string")
        validateParam("address", address, "string")
        validateParam("phone_number", phone_number, "string")
        validateParam("image", image, "string")

        const companieProfile = {
            idToEdit: idToEdit as string,
            token: token as string,
            name: name as string,
            description: description as string,
            address: address as string,
            phone_number: phone_number as string,
            image: image as string
        }

        return companieProfile
    }


    public DeleteCompanieProfileInputDTO = (
        idToDelete: unknown,
        token: unknown
    ): DeleteCompanieProfileInputDTO => {

        validateParam("token", token, "string")
        validateParam("idToDelete", idToDelete, "string")

        const deleteCompanie = {
            idToDelete: idToDelete as string,
            token: token as string
        }

        return deleteCompanie
    }

}


