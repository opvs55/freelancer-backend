import { validateParam } from "../../Utils/Validate"
import { CreateUserWorkVacanciesInputDTO, DeleteUserWorkVacanciesInputDTO, GetUserWorkVacanciesInputDTO } from "../InterfaceDTO/UserWorkVacancies"



//CLASSE - TESTANDO A FUNÇÃO DE VALIDAÇÃO, se der bom, atualizo para o projeto todo

export class UserWorkVacanciesDTO {

    public CreateJobVacanciesInputDTO = (
        token: unknown,

    ): CreateUserWorkVacanciesInputDTO => {

        validateParam("token", token, "string")

        const WorkVancacy: CreateUserWorkVacanciesInputDTO = {
    
            token: token as string,

        }


        return WorkVancacy
    }

    public GetJobVacanciesInputDTO = (
        id: unknown,
        token: unknown
    ): GetUserWorkVacanciesInputDTO => {

        validateParam("token", token, "string")

        const getWorkVacancies = {
            token:token as string,
            id:id as string
        }

        return getWorkVacancies
    }
    

    public DeleteJobVacanciesInputDTO = (
        idToDelete: unknown,
        token: unknown
    ): DeleteUserWorkVacanciesInputDTO => {

        validateParam("token", token, "string")
        validateParam("idToDelete", idToDelete, "string")

        const deleteWorkVacancies = {
            idToDelete: idToDelete as string,
            token: token as string
        }

        return  deleteWorkVacancies
    }

}









