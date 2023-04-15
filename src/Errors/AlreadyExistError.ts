import { BaseError } from "./BaseError";

export class AlreadyExistError extends BaseError {
    constructor(
        message: string = "Este profile já existe" // mensagem de erro padrão caso não seja enviado um argumento
    ) {
        super(409, message)
    }
}