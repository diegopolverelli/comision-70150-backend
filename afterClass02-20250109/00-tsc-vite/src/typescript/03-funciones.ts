export const funciones:string="funciones"


console.log("funciones")

const suma=(a:number, b:number):number=>{

    return a+b


}

console.log(suma(4, 5))

const procesaDatos=<T>(a:T, b:T):T=>{

    return b
}

let dato1=procesaDatos<string>("Juan", "Pedro")
let dato2=procesaDatos<number>(100, 3)

console.log(suma(100, dato2))
procesaDatos({nombre:"Juan"}, {nombre:"Maria"})


const procesaDatos2=<T, U>(a:T, b:U):U=>{
    
    return b
}

procesaDatos2({nombre:"Juan"}, 100)