
import { validateParam } from "../../Utils/Validate"
import { CreateUserProfessionInputDTO, DeleteUserProfessionInputDTO, EditUserProfessionInputDTO, GetUserProfessionInputDTO } from "../interfaceDTO/UserProfessionInterface"


//=================================================/

//CLASSE - TESTANDO A FUNÇÃO DE VALIDAÇÃO, se der bom, atualizo para o projeto todo

export class UserProfessionDTO {


    public CreateUserProfessionInputDTO = (

        token: unknown,
        user_id: unknown,
        profession_id: unknown,
        experience_years: unknown

    ): CreateUserProfessionInputDTO => {

        validateParam("token", token, "string")
        validateParam("user_id", user_id, "string")
        validateParam("profession_id", profession_id, "string")
        validateParam("experience_years", experience_years, "string")

        const userProfession: CreateUserProfessionInputDTO= {

            token: token as string,
            user_id: user_id as string,
            profession_id: profession_id as string,
            experience_years: experience_years as string,

        }


        return userProfession
    }

    public GetUserProfessionInputDTO = (
        id: unknown,
        token: unknown
    ): GetUserProfessionInputDTO => {

        validateParam("token", token, "string")

        const getUserProfile = {
            id: id as string,
            token: token as string,
        }

        return getUserProfile
    }

    public EditUserProfileInputDTO = (

        idToEdit: unknown,
        token: unknown,
        user_id: unknown,
        profession_id: unknown,
        experience_years: unknown

    ): EditUserProfessionInputDTO => {

        validateParam("idToEdiT", idToEdit, "string")
        validateParam("token", token, "string")
        validateParam("user_id", user_id, "string")
        validateParam("profession_id", profession_id, "string")
        validateParam("experience_years", experience_years, "string")

        const userProfile = {
            idToEdit: idToEdit as string,
            token: token as string,
            user_id: user_id as string,
            profession_id: profession_id as string,
            experience_years: experience_years as string,
        }

        return userProfile
    }

    public DeleteUserProfileInputDTO = (
        idToDelete: unknown,
        token: unknown
    ): DeleteUserProfessionInputDTO => {

        validateParam("token", token, "string")
        validateParam("idToDelete", idToDelete, "string")

        const deleteUserProfile = {
            idToDelete: idToDelete as string,
            token: token as string
        }

        return deleteUserProfile
    }

}


