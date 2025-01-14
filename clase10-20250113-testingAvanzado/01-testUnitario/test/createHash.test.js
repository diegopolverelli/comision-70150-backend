import { createHash } from "../src/utils/index.js";
import {describe, it} from "mocha"
import {expect} from "chai"

describe("Pruebas método generaHash", ()=>{

    // after, before, etc... ¿los necesito?

    it("Si envío un string al método, el resultado es diferente del valor enviado", async()=>{
        let password="prueba123"
        let resultado=await createHash(password)

        expect(resultado).not.to.be.eq(password)
    })

    it("El método devuelve un hash con codificación bcrypt", async()=>{
        //$2b$
        let password="prueba123"
        let resultado=await createHash(password)
        console.log(resultado.slice(0,3))
        expect(resultado.slice(0,4)).to.be.eq('$2b$')
    })
})