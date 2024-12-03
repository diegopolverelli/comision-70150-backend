export class CustomError{
    static createError(name, message, cause, code){
        let error=new Error(message, {cause})
        error.name=name
        error.code=code
        error.custom=true

        throw error       
        // throw new Error("mensaje personalizado de error")
    }
}