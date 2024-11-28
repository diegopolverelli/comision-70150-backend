import {fakerES_MX as faker} from "@faker-js/faker"
const generaCliente=()=>{
    let nombre=faker.person.firstName()
    let apellido=faker.person.lastName()
    let dni=faker.number.int({min:10500300, max:55000000})
    let email=faker.internet.email({firstName:nombre, lastName:apellido})

    return {
        nombre, apellido, dni, email
    }
}



// nombre: String,
// apellido: String,
// dni: String,
// email: String


const generaItemCart=()=>{
    let producto=faker.commerce.product()
    let precio=faker.number.float({ multipleOf: 0.25, min: 1800, max:14520 })
    let cantidad=faker.number.int({min:1, max:100})
    let id=faker.database.mongodbObjectId()

    return {producto, precio, cantidad, id}
}


// producto: String, 
// precio: Number, 
// cantidad: Number, 
// id: String

export const generaCarrito=()=>{
    let nroComp="00"+faker.number.int({min:10, max:24})+"-000"+faker.string.numeric({ length: 5, allowLeadingZeros: true, min:1 })
    let fecha=faker.date.recent({ days: 10 })
    let cliente=generaCliente()
    let carrito=[]
    for(let i=0; i<faker.number.int({min:1, max:12});i++){
        carrito.push(generaItemCart())
    }
    let total=carrito.reduce((acum, i)=>acum+=i.cantidad*i.precio, 0)

    return {
        nroComp, 
        fecha, 
        cliente, 
        carrito, 
        total
    }
}

console.log(generaCarrito())