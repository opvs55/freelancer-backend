
import { validateParam } from "../../Utils/Validate"
import { CreateUserProfessions, DeleteUserProfessionsInputDTO, EditUserProfessionsInputDTO, GetUserProfessionsInputDTO } from "../InterfaceDTO/UserProfession"


//=================================================/

//CLASSE - TESTANDO A FUNÇÃO DE VALIDAÇÃO, se der bom, atualizo para o projeto todo

export class UserProfessionsDTO {


    public CreateUserProfessionsInputDTO = (

        token: unknown,
        id: unknown,
        user_id: unknown,
        profession: unknown,
        experienceYears: unknown

    ): CreateUserProfessions => {

        validateParam("token", token, "string")
        validateParam("id", id, "string")
        validateParam("user_id", user_id, "string")
        validateParam("profession", profession, "string")
        validateParam("experienceYears", experienceYears, "number")

        const userProfessions : CreateUserProfessions  = {

            token: token as string,
            id: id as string,
            user_id: user_id as string,
            profession: profession as string,
            experienceYears: experienceYears as number
        }


        return userProfessions
    }

    public GetUserProfessionsInputDTO = (
        token: unknown,
    ): GetUserProfessionsInputDTO => {

        validateParam("token", token, "string")

        const getUserProfessions = {
            token: token as string,
        }

        return getUserProfessions
    }

    public EditUserProfessionsInputDTO = (

        idToEdit: unknown,
        token: unknown,
        profession: unknown,
        experienceYears: unknown
    
    ): EditUserProfessionsInputDTO => {

        validateParam("idToEdiT", idToEdit, "string")
        validateParam("token", token, "string")
        validateParam("profession", profession, "string")
        validateParam("experienceYears", experienceYears, "number")

        const userProfessions = {
            idToEdit: idToEdit as string,
            token: token as string,
            profession: profession as string,
            experienceYears: experienceYears as number
        }

        return userProfessions
    }

    public DeleteUserProfessionsInputDTO = (
        idToDelete: unknown,
        token: unknown
    ): DeleteUserProfessionsInputDTO => {

        validateParam("token", token, "string")
        validateParam("idToDelete", idToDelete, "string")

        const deleteUserProfessions = {
            idToDelete: idToDelete as string,
            token: token as string
        }

        return deleteUserProfessions
    }

}


