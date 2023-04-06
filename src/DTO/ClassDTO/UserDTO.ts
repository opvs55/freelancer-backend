import { USER_ROLES } from "../../Interfaces/User/Users.Types"
import { validateParam } from "../../Utils/Validate"
import { DeleteUserInputDTO, EditUserInputDTO, GetUserInputDTO, SignupUserInputDTO } from "../InterfaceDTO/UserInterface"


//=================================================/

//CLASSE - TESTANDO A FUNÇÃO DE VALIDAÇÃO, se der bom, atualizo para o projeto todo

export class UserDTO {


    public SignUPUserInputDTO = (
        
        username: unknown,
        email: unknown,
        password: unknown,


    ): SignupUserInputDTO => {

        validateParam("username", username, "string")
        validateParam("email", email, "string")
        validateParam("password", password, "string")
        
        const user: SignupUserInputDTO = {

            username: username as string,
            email: email as string,
            password: password as string,
        
        }

        return user
    }

    public GetUserInputDTO = (
        token: unknown,
        id: unknown
    ): GetUserInputDTO => {

        validateParam("token", token, "string")
        validateParam("id", id, "string")

        const getUser = {
            token:token as string,
            id:id as string
        }

        return getUser
    }

    public EditUserInputDTO = (

        idToEdit: unknown,
        token: unknown,
        username: unknown,
        email: unknown,
        password: unknown,
        role: unknown,


    ): EditUserInputDTO => {

        validateParam("idToEdiT", idToEdit, "string")
        validateParam("token", token, "string")
        validateParam("username", username, "string")
        validateParam("email", email, "string")
        validateParam("password", password, "string")
        validateParam("role", role, "USER_ROLES")

        const user = {
            idToEdit: idToEdit as string,
            token: token as string,
            username: username as string,
            email: email as string,
            password: password as string,
            role: role as USER_ROLES,
        }

        return user
    }

    public DeleteUserInputDTO = (
        idToDelete: unknown,
        token: unknown
    ): DeleteUserInputDTO => {

        validateParam("token", token, "string")
        validateParam("idToDelete", idToDelete, "string")

        const deleteUser = {
            idToDelete: idToDelete as string,
            token: token as string
        }

        return deleteUser
    }

}


