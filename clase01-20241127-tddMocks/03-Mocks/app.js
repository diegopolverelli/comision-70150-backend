import {fakerES as faker} from "@faker-js/faker"

console.log(faker.animal.cat())
console.log(faker.animal.insect())

console.log(faker.color.human())

let nombre=faker.person.firstName("female")
let apellido=faker.person.lastName()
let email=faker.internet.email({firstName: nombre, lastName: apellido})
let telNumber=faker.phone.number({ style: 'international' })

let persona={
    nombre, apellido, email, telNumber
}

console.log(persona)

let title=faker.commerce.product()
let description=faker.commerce.productDescription()
let precio=faker.commerce.price()
let stock=faker.number.int({min:0, max:5000})


let producto={title, description, precio, stock}
console.log(producto)