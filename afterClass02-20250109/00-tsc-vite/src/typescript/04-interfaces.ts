import { PersonajeSW } from "./interface/personajeSW"
import { Reqresin } from "./interface/reqresin"

export const interfaces:string="interfaces"

const leeApi=async<T>(url:string):Promise<T>=>{
    let rta=await fetch(url)
    let data:T=await rta.json()

    return data

}

let datos:Reqresin=await leeApi("https://reqres.in/api/users?page=2")
console.log(datos.data[0].email)

let datos2:PersonajeSW=await leeApi("https://swapi.py4e.com/api/people/1/")
console.log(datos2.height)
console.log(datos2.name)

let dato3=await leeApi<PersonajeSW>("https://swapi.py4e.com/api/people/1/")

