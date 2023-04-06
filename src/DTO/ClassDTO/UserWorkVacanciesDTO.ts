import { validateParam } from "../../Utils/Validate"
import {
    CreateUserWorkVacanciesInputDTO,
    DeleteUserWorkVacanciesInputDTO,
    EditUserWorkVacanciesInputDTO,
    GetUserWorkVacanciesInputDTO
} from "../interfaceDTO/UserWorkVacanciesInterface"




//CLASSE - TESTANDO A FUNÇÃO DE VALIDAÇÃO, se der bom, atualizo para o projeto todo

export class UserWorkVacanciesDTO {

    public CreateUserWorkVacanciesInputDTO = (
        token: unknown | undefined,
        userProfileId: string,
        work_vacancy_id: string

    ): CreateUserWorkVacanciesInputDTO => {

        validateParam("token", token, "string")
        validateParam("user_id", userProfileId, "string")
        validateParam("work_vacancy_id", work_vacancy_id, "string")

        const workVacancies: CreateUserWorkVacanciesInputDTO = {

            token: token as string,
            userProfileId: userProfileId as string,
            work_vacancy_id: work_vacancy_id as string
            
        }


        return workVacancies
    }


    public GetAllUserWorkVacanciesInputDTO = (

        id: unknown,
        token: unknown

    ): GetUserWorkVacanciesInputDTO => {

        validateParam("token", token, "string")
        validateParam("id", id, "string")

        const getAllUserWorkVacancies = {

            id: id as string,
            token: token as string

        }

        return getAllUserWorkVacancies
    }

    public GetUserWorkVacanciesInputDTO = (

        id: unknown,
        token: unknown

    ): GetUserWorkVacanciesInputDTO => {

        validateParam("token", token, "string")
        validateParam("id", id, "string")

        const getUserWorkVacancies = {

            id: id as string,
            token: token as string

        }

        return getUserWorkVacancies
    }


    public EditUserWorkVacanciesInputDTO = (

        idToEdit: unknown,
        token: unknown,
        user_id: unknown,
        work_vacancy_id: unknown,
        chosen: unknown,
        applied_at: unknown

    ): EditUserWorkVacanciesInputDTO => {

        validateParam("idToEdiT", idToEdit, "string")
        validateParam("token", token, "string")
        validateParam("user_id", user_id, "string")
        validateParam("work_vacancy_id", work_vacancy_id, "string")
        validateParam("chosen", chosen, "string")
        validateParam("applied_at", applied_at, "string")

        const workVacancies: EditUserWorkVacanciesInputDTO = {

            token: token as string,
            idToEdit: idToEdit as string,
            chosen: chosen as number,
            
        }

        return workVacancies
    }



    public DeleteUserWorkVacanciesInputDTO = (
        idToDelete: unknown,
        token: unknown
    ): DeleteUserWorkVacanciesInputDTO => {

        validateParam("token", token, "string")
        validateParam("idToDelete", idToDelete, "string")

        const deleteUserWorkVacancies = {
            idToDelete: idToDelete as string,
            token: token as string
        }

        return deleteUserWorkVacancies
    }

}









