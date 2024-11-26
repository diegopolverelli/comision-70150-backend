import dotenv from "dotenv"
import { Command, Option } from "commander"

const programa=new Command()

programa.addOption(new Option("-m, --mode <mode>", "Modo de ejecución del script").choices(["prod", "dev"]).default("dev"))

programa.parse()

let {mode}=programa.opts()

dotenv.config({
    override: true, 
    path: mode==="prod"?"./src/.env.prod":"./src/.env.dev"
})

export const config={
    PORT:process.env.PORT, 
    MONGO_URL: process.env.MONGO_URL
}