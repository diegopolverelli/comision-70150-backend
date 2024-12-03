import os from "os"

export const errorArgumentos=(heroe)=>{
    let {name, ...otras} =heroe
    return `
Error en carga de Heroe. 
Datos requeridos:
    - name, type string: se recibió ${name}
Datos opcioneales: 
    - publisher, alias, team, powers, se recibió ${JSON.stringify(otras)}

Hostname: ${os.hostname()}
User: ${os.userInfo().username}
    `
}