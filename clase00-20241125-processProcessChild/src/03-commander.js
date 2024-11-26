import {Command, Option} from "commander"

const programa=new Command()

programa.option("-p, --port <port>", "Puerto donde escuchará el server", 8080)
programa.option("-u, --user <pusuario>", "Usuario que ejecuta el script")
programa.option("-d, --debug", "Activar modo debug")
programa.requiredOption("-w, --word <word>", "palabra secreta")
programa.addOption(new Option("-m, --mode <mode>", "Modo de ejecución del script").choices(["prod", "dev", "test"]).default("dev"))

programa.allowUnknownOption()
programa.parse()

let options=programa.opts()

console.log(options)
console.log(`Server corriendo en puerto ${options.port}`)

console.log(programa.args)