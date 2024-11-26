let [ rutaNode, rutaScript, ...argumentosCLI ] = process.argv   // ... son aquí el operador rest

// console.log(argumentosCLI)
let indicePort=argumentosCLI.findIndex(a=>a=="--port")
if(indicePort==-1){
    console.log(`Complete flag --port`)
    process.exit()
}

console.log(`El server se ejecutará en el puerto ${argumentosCLI[indicePort + 1]}`)