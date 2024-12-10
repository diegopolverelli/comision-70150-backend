import {fileURLToPath} from 'url';
import { dirname } from 'path';
import winston from "winston"
import {config} from "./config/config.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;

export const logger=winston.createLogger({
    transports:[
        new winston.transports.File({
            level:"info", 
            filename: "./src/logs/logs.log",
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            )
        })
    ]
})

const transporteConsola=new winston.transports.Console({
    level:"debug", 
    format: winston.format.combine(
        winston.format.colorize(), 
        winston.format.timestamp(), 
        winston.format.simple()
    )
})

if(config.MODE=="dev"){
    logger.add(transporteConsola)
}

export const middLogg=(req, res, next)=>{
    req.logger=logger
    next()
}

const customLevels={
    levels:{
        critico: 0,
        intermedio: 1, 
        leve: 2, 
        info: 3
    },
    colors: {
        critico:"red", 
        intermedio: "yellow", 
        leve: "green", 
        info:"blue"
    }
}

const loggerCustomizado=winston.createLogger({
    levels: customLevels.levels,
    transports: [
        new winston.transports.Console({
            level: "leve", 
            format: winston.format.combine(
                winston.format.colorize({
                    colors: customLevels.colors
                }),
                winston.format.simple()
            )
        })
    ]
})

loggerCustomizado.leve("Prueba error leve")
loggerCustomizado.intermedio("Prueba error intermedio")
loggerCustomizado.critico("Prueba error grave")
