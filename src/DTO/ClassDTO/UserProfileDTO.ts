
import { validateParam } from "../../Utils/Validate"
import { CreateUserProfile, DeleteUserProfileInputDTO, EditUserProfileInputDTO, GetUserProfileInputDTO } from "../InterfaceDTO/UserProfile"


//=================================================/

//CLASSE - TESTANDO A FUNÇÃO DE VALIDAÇÃO, se der bom, atualizo para o projeto todo

export class UserProfessionsDTO {


    public CreateUserProfessionsInputDTO = (

        token: unknown,
        id: unknown,
        user_id: unknown,
        first_name: unknown,
        last_name: unknown,
        address: unknown,
        phone_number: unknown,
        bio: unknown,
        skills: unknown,
        image: unknown

    ): CreateUserProfile => {

        validateParam("token", token, "string")
        validateParam("id", id, "string")
        validateParam("user_id", user_id, "string")
        validateParam("first_name", first_name, "string")
        validateParam("last_name", last_name, "string")
        validateParam("address", address, "string")
        validateParam("phone_number", phone_number, "string")
        validateParam("bio", bio, "string")
        validateParam("skills", skills, "string")
        validateParam("image", image, "string")

        const userProfessions: CreateUserProfile = {

            token: token as string,
            id: id as string,
            user_id: user_id as string,
            first_name: first_name as string,
            last_name: last_name as string,
            address: address as string,
            phone_number: phone_number as string,
            bio: bio as string,
            skills: skills as string,
            image: image as string

        }


        return userProfessions
    }

    public GetUserProfessionsInputDTO = (
        token: unknown,
    ): GetUserProfileInputDTO => {

        validateParam("token", token, "string")

        const getUserProfessions = {
            token: token as string,
        }

        return getUserProfessions
    }

    public EditUserProfessionsInputDTO = (

        idToEdit: unknown,
        token: unknown,
        first_name: unknown,
        last_name: unknown,
        address: unknown,
        phone_number: unknown,
        bio: unknown,
        skills: unknown,
        image: unknown

    ): EditUserProfileInputDTO => {

        validateParam("idToEdiT", idToEdit, "string")
        validateParam("token", token, "string")
        validateParam("first_name", first_name, "string")
        validateParam("last_name", last_name, "string")
        validateParam("address", address, "string")
        validateParam("phone_number", phone_number, "string")
        validateParam("bio", bio, "string")
        validateParam("skills", skills, "string")
        validateParam("image", image, "string")

        const userProfessions = {
            idToEdit: idToEdit as string,
            token: token as string,
            first_name: first_name as string,
            last_name: last_name as string,
            address: address as string,
            phone_number: phone_number as string,
            bio: bio as string,
            skills: skills as string,
            image: image as string
        }

        return userProfessions
    }

    public DeleteUserProfessionsInputDTO = (
        idToDelete: unknown,
        token: unknown
    ): DeleteUserProfileInputDTO => {

        validateParam("token", token, "string")
        validateParam("idToDelete", idToDelete, "string")

        const deleteUserProfessions = {
            idToDelete: idToDelete as string,
            token: token as string
        }

        return deleteUserProfessions
    }

}


