
import { validateParam } from "../../Utils/Validate"
import {  CreateUserProfileInputDTO, DeleteUserProfileInputDTO, EditUserProfileInputDTO, GetUserProfileInputDTO } from "../interfaceDTO/UserProfileInterface"


//=================================================/

//CLASSE - TESTANDO A FUNÇÃO DE VALIDAÇÃO, se der bom, atualizo para o projeto todo

export class UserProfileDTO {


    public CreateUserProfileInputDTO = (

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

    ): CreateUserProfileInputDTO => {

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

        const userProfile: CreateUserProfileInputDTO = {

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


        return userProfile
    }

    public GetUserProfileInputDTO = (
        id: unknown,
        token: unknown
    ): GetUserProfileInputDTO => {

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

        const userProfile = {
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

        return userProfile
    }

    public DeleteUserProfileInputDTO = (
        idToDelete: unknown,
        token: unknown
    ): DeleteUserProfileInputDTO => {

        validateParam("token", token, "string")
        validateParam("idToDelete", idToDelete, "string")

        const deleteUserProfile = {
            idToDelete: idToDelete as string,
            token: token as string
        }

        return deleteUserProfile
    }

}


