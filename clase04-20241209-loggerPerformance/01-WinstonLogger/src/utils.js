import {fileURLToPath} from 'url';
import { dirname } from 'path';
import winston from "winston"
import os from "os"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;

const formatoMensaje=winston.format(log=>{
    // console.log(log)
    log.message+=` - hostname: ${os.hostname()} - user: ${os.userInfo().username}`

    return log
})

const filtroVerboseHttp=winston.format(log=>{
    // console.log(log)
    if(log.level==="verbose" || log.level==="http"){
        log.message+=` - hostname: ${os.hostname()} - user: ${os.userInfo().username}`
        return log
    }
})

export const logger=winston.createLogger(
    {
        transports:[
            new winston.transports.Console(
                {
                    level: "silly",
                    format: winston.format.combine(
                        winston.format.colorize(),
                        winston.format.simple()
                    )
                }
            ),
            new winston.transports.File({
                level:"info", 
                filename: "./src/logs/error.log",
                format: winston.format.combine(
                    formatoMensaje(),
                    winston.format.timestamp(),
                    winston.format.prettyPrint()
                )
            }),
            new winston.transports.File({
                level:"verbose", 
                filename: "./src/logs/mensajesVerboseHttp.log",
                format: winston.format.combine(
                    filtroVerboseHttp(),
                    winston.format.timestamp(),
                    winston.format.prettyPrint()
                )
            })
        ]
    }
)

export const middLog=(req, res, next)=>{
    req.logger=logger

    next()
}