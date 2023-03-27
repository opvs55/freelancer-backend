import { validateParam } from "../Utils/Validate"
import { CreateJobVacanciesInputDTO, DeleteJobVacanciesInputDTO, EditJobVacanciesInputDTO, GetJobVacanciesInputDTO } from "./interfaceDTO/jobVocancies"



//CLASSE - TESTANDO A FUNÇÃO DE VALIDAÇÃO, se der bom, atualizo para o projeto todo

export class JobVacanciesDTO {

    public CreateJobVacanciesInputDTO = (
        token: unknown,
        title: unknown,
        description: unknown,
        skills_required: unknown,
        location: unknown,
        salary:number

    ): CreateJobVacanciesInputDTO => {

        validateParam("token", token, "string")
        validateParam("title", title, "string")
        validateParam("description", description, "string")
        validateParam("skills_required", skills_required, "string")
        validateParam("location", location, "string")
        validateParam("salary", salary, "number")

        const jobVancacy: CreateJobVacanciesInputDTO = {
    
            token: token as string,
            title : title  as string,
            description: description as string,
            skills_required: skills_required as string,
            location: location as string,
            salary: salary as number
        }


        return jobVancacy
    }

    public GetJobVacanciesInputDTO = (
        token: unknown,
    ): GetJobVacanciesInputDTO => {

        validateParam("token", token, "string")

        const getJobVacancies = {
            token:token as string
        }

        return getJobVacancies
    }
    
    public EditJobVacanciesInputDTO = (

        idToEdit: unknown,
        token: unknown,
        title: unknown,
        description: unknown,
        skills_required: unknown,
        location: unknown,
        salary:number

    ): EditJobVacanciesInputDTO => {

        validateParam("idToEdiT", idToEdit, "string")
        validateParam("token", token, "string")
        validateParam("title", title, "string")
        validateParam("description", description, "string")
        validateParam("skills_required", skills_required, "string")
        validateParam("location", location, "string")
        validateParam("salary", salary, "number")

        const jobVancacy: EditJobVacanciesInputDTO  = {
    
            token: token as string,
            title : title  as string,
            description: description as string,
            skills_required: skills_required as string,
            location: location as string,
            salary: salary as number
        }

        return jobVancacy
    }


    public DeleteJobVacanciesInputDTO = (
        idToDelete: unknown,
        token: unknown
    ): DeleteJobVacanciesInputDTO => {

        validateParam("token", token, "string")
        validateParam("idToDelete", idToDelete, "string")

        const deleteJobVacancies = {
            idToDelete: idToDelete as string,
            token: token as string
        }

        return deleteJobVacancies
    }

}









