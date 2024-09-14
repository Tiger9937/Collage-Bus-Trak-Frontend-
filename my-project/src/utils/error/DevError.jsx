class ApiError extends Error{
    constructor(
        StatusCode ,
        mesage = "somthing went worng",
        errors = [],
        stack = "",
    ){
        super(mesage)
        this.StatusCode = StatusCode
        this.mesage = mesage
        this.data = null
        this.success = false
        this.errors = errors 
        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this , this.constructor)
        }
    }
    toJSON(){
        return {
            success: this.success,
            statusCode: this.StatusCode,
            message: this.mesage,
            errors: this.errors,
            stack: this.stack
        }
    }
}
export{ApiError}