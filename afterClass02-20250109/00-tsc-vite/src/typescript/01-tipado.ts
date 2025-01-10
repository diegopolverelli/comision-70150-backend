export const tipado="Tipado de variables"

let nombre: string = "Carlos"

nombre="Martina"
// nombre=104

console.log(nombre)

let numero:number=100

// numero=false

console.log(numero)

let edad: number | undefined

// edad=false
edad=100
// edad="Pepe"

type stringOrNumber= string | number

let data01:stringOrNumber = 100

data01="Juan"

console.log(data01)

type persona={
    nombre: string
    apellido: string
    // email: string
    // edad: number
    colorPelo: string
}

let juan:persona

juan={
    colorPelo:"negro",
    nombre: "Juan",
    apellido: "Lopez"
}

console.log(juan)

interface persona01{
    nombre: string
    email: string
    colorPreferido?:string
    saludar: (a: string)=>number
}

let pablo:persona01 = {
    nombre: "",
    email: "",
    // colorPreferido:"ROJO",
    saludar:(edad:string)=>{
        console.log("Hola Chau")
        return 1009
    }
}

pablo.saludar("90")



