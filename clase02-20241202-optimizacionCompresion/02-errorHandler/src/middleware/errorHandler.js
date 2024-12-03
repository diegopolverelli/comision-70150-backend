export const errorHandler=(error, req, res, next)=>{
    if(error.custom){
        console.log(error.cause)
        res.setHeader('Content-Type','application/json');
        return res.status(error.code).json({error:`${error.name}:${error.message}`})
    }else{
        res.setHeader('Content-Type','application/json');
        console.log(error)
        return res.status(500).json({status: "errorHandler",error:`Error interno del servidor: ${error.message}`})
    }
}