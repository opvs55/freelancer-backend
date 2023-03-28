//Validação do tipo - recebe: nome, valor , tipo
export function validateParam(paramName: string, paramValue: any, expectedType: string): void {
    if (typeof paramValue !== expectedType) {
        throw new Error(`Invalid parameter '${paramName}'. Expected type '${expectedType}'.`);
    }
}
