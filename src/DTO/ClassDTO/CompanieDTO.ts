import { validateParam } from "../../Utils/Validate"
import { DeleteCompanieInputDTO, EditCompanieInputDTO, GetCompanieInputDTO, SignUpCompanieInputDTO } from "../InterfaceDTO/Companie"


//=================================================/

//CLASSE - TESTANDO A FUNÇÃO DE VALIDAÇÃO, se der bom, atualizo para o projeto todo

export class CompanieDTO {

    // public SignUPCompanieInputDTO = (
    //     name: unknown,
    //     email: unknown,
    //     cellphone: unknown,
    //     address: unknown,
    //     description: unknown,
    //     password: unknown

    // ): SignUpCompanieInputDTO => {

    //     if (typeof name !== "string") {
    //         throw new BadRequestError("name deve ser uma string")
    //     }
    //     if (typeof email !== "string") {
    //         throw new BadRequestError("email deve ser uma string")
    //     }
    //     if (typeof cellphone !== "string") {
    //         throw new BadRequestError("cellphone deve ser uma string")
    //     }
    //     if (typeof address !== "string") {
    //         throw new BadRequestError("address deve ser uma string")
    //     }
    //     if (typeof description !== "string") {
    //         throw new BadRequestError("description deve ser uma string")
    //     }
    //     if (typeof password !== "string") {
    //         throw new BadRequestError("password deve ser uma string")
    //     }

    //     const companie: SignUpCompanieInputDTO = {
    //         name: name as string,
    //         email: email as string,
    //         cellphone: cellphone as string,
    //         address: address as string,
    //         description: description as string,
    //         password: password as string
    //     }


    //     return companie
    // }

    public SignUPCompanieInputDTO = (
        name: unknown,
        email: unknown,
        cellphone: unknown,
        address: unknown,
        description: unknown,
        password: unknown

    ): SignUpCompanieInputDTO => {

        validateParam("name", name, "string")
        validateParam("email", email, "string")
        validateParam("cellphone", cellphone, "string")
        validateParam("address", address, "string")
        validateParam("description", description, "string")
        validateParam("password", password, "string")

        const companie: SignUpCompanieInputDTO = {
            name: name as string,
            email: email as string,
            cellphone: cellphone as string,
            address: address as string,
            description: description as string,
            password: password as string
        }


        return companie
    }

    public GetCompanieInputDTO = (
        token: unknown,
        id: unknown
    ): GetCompanieInputDTO => {

        validateParam("token", token, "string")
        validateParam("id", id, "string")

        const getCompanie = {
            token:token as string,
            id:id as string
        }

        return getCompanie
    }

    public EditCompanieInputDTO = (

        idToEdit: unknown,
        token: unknown,
        name: unknown,
        email: unknown,
        cellphone: unknown,
        address: unknown,
        description: unknown,
        password: unknown,
        image: unknown

    ): EditCompanieInputDTO => {

        validateParam("idToEdiT", idToEdit, "string")
        validateParam("token", token, "string")
        validateParam("name", name, "string")
        validateParam("email", email, "string")
        validateParam("cellphone", cellphone, "string")
        validateParam("address", address, "string")
        validateParam("description", description, "string")
        validateParam("password", password, "string")
        validateParam("image", image, "string")

        const companie = {
            idToEdit: idToEdit as string,
            token: token as string,
            name: name as string,
            email: email as string,
            cellphone: cellphone as string,
            address: address as string,
            description: description as string,
            password: password as string,
            image: image as string,
        }

        return companie
    }

    // public EditCompanieInputDTO = (

    //     idToEdit: unknown,
    //     token: unknown,
    //     name: unknown,
    //     email: unknown,
    //     cellphone: unknown,
    //     address:unknown,
    //     description:unknown,
    //     password:unknown,
    //     image:unknown

    // ): EditCompanieInputDTO =>{

    //     if(typeof idToEdit !== "string"){
    //         throw new BadRequestError("idToEdit deve ser string")
    //     }
    //     if(typeof token !== "string"){
    //         throw new BadRequestError("token precisa ser string")
    //     }
    //     if(typeof name !== "string"){
    //         throw new BadRequestError("name deve ser string")
    //     }
    //     if(typeof email !== "string"){
    //         throw new BadRequestError("email deve ser string")
    //     }
    //     if(typeof cellphone !== "string"){
    //         throw new BadRequestError("cellphone deve ser string")
    //     }
    //     if(typeof address !== "string"){
    //         throw new BadRequestError("andress deve ser string")
    //     }
    //     if(typeof description !== "string"){
    //         throw new BadRequestError("description deve ser string")
    //     }
    //     if(typeof password !== "string"){
    //         throw new BadRequestError("password deve ser string")
    //     }
    //     if(typeof image !== "string"){
    //         throw new BadRequestError("image deve ser string")
    //     }

    //     const companie = {
    //         idToEdit,
    //         token,
    //         name,
    //         email,
    //         cellphone,
    //         address,
    //         description,
    //         password,
    //         image
    //     }

    //     return companie
    // }

    public DeleteCompanieInputDTO = (
        idToDelete: unknown,
        token: unknown
    ): DeleteCompanieInputDTO => {

        validateParam("token", token, "string")
        validateParam("idToDelete", idToDelete, "string")

        const deleteCompanie = {
            idToDelete: idToDelete as string,
            token: token as string
        }

        return deleteCompanie
    }

}

