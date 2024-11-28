import colors from "colors"
import {suma} from "./suma.js"

let pruebas=0
let ok=0
let resultado=0
let esperado=0

console.log('\x1b[34m\x1b[1mPrueba función suma()\x1b[0m');
console.time(`Demora en el proceso de testing`)

pruebas++
console.log(`- Prueba ${pruebas}: si recibo 2 args numéricos, retorna la suma de ambos`)
resultado=suma(5, 4)
esperado=9
if(resultado===esperado){
    ok++
    console.log(`√ Prueba ${pruebas} - superada!`.green)
}else{
    console.log(`- Prueba fallida... :(`.red)
}


pruebas++
console.log(`- Prueba ${pruebas}: si recibo algún arg no numérico, retorna "error"`)
resultado=suma(5, "María del Carmen")
esperado="error"
if(resultado===esperado){
    ok++
    console.log(`√ Prueba ${pruebas} - superada!`.green)
}else{
    console.log(`- Prueba fallida... :(`.red)
}


pruebas++
console.log(`- Prueba ${pruebas}: si recibo n args todos ellos numéricos, retorna la suma de todos`)
resultado=suma(1, 2, 3, 4, 5)
esperado=15
if(resultado===esperado){
    ok++
    console.log(`√ Prueba ${pruebas} - superada!`.green)
}else{
    console.log(`- Prueba fallida... :(`.red)
}






console.log(`\n\nResultado test:`)
console.log(`Pruebas realizadas ${pruebas} | pruebas superadas ${String(ok).green} | pruebas fallidas ${String(pruebas-ok).red}`)

console.timeEnd(`Demora en el proceso de testing`)