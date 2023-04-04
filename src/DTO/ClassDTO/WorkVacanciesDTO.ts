import { validateParam } from "../../Utils/Validate"
import { CreateWorkVacanciesInputDTO, DeleteWorkVacanciesInputDTO, EditWorkVacanciesInputDTO,GetWorkVacanciesInputDTO } from "../interfaceDTO/WorkVacanciesInterface"



//CLASSE - TESTANDO A FUNÇÃO DE VALIDAÇÃO, se der bom, atualizo para o projeto todo

export class WorkVacanciesDTO {

    public CreateJobVacanciesInputDTO = (
        token: unknown,
        title: unknown,
        description: unknown,
        skills_required: unknown,
        location: unknown,
        salary:number

    ): CreateWorkVacanciesInputDTO => {

        validateParam("token", token, "string")
        validateParam("title", title, "string")
        validateParam("description", description, "string")
        validateParam("skills_required", skills_required, "string")
        validateParam("location", location, "string")
        validateParam("salary", salary, "number")

        const workVacancies: CreateWorkVacanciesInputDTO = {
    
            token: token as string,
            title : title  as string,
            description: description as string,
            skills_required: skills_required as string,
            location: location as string,
            salary: salary as number
        }


        return workVacancies
    }

    public GetJobVacanciesInputDTO = (
        token: unknown,
    ): GetWorkVacanciesInputDTO => {

        validateParam("token", token, "string")

        const getWorkVacancies = {
            token:token as string
        }

        return getWorkVacancies
    }
    
    public EditJobVacanciesInputDTO = (

        idToEdit: unknown,
        token: unknown,
        title: unknown,
        description: unknown,
        skills_required: unknown,
        location: unknown,
        salary:number

    ): EditWorkVacanciesInputDTO => {

        validateParam("idToEdiT", idToEdit, "string")
        validateParam("token", token, "string")
        validateParam("title", title, "string")
        validateParam("description", description, "string")
        validateParam("skills_required", skills_required, "string")
        validateParam("location", location, "string")
        validateParam("salary", salary, "number")

        const workVacancies: EditWorkVacanciesInputDTO = {
    
            token: token as string,
            title : title  as string,
            description: description as string,
            skills_required: skills_required as string,
            location: location as string,
            salary: salary as number
        }

        return workVacancies
    }


    public DeleteJobVacanciesInputDTO = (
        idToDelete: unknown,
        token: unknown
    ): DeleteWorkVacanciesInputDTO => {

        validateParam("token", token, "string")
        validateParam("idToDelete", idToDelete, "string")

        const deleteWorkVacancies = {
            idToDelete: idToDelete as string,
            token: token as string
        }

        return deleteWorkVacancies
    }

}









