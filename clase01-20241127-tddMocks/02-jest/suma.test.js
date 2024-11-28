const suma=require("./suma.js").suma

describe(`Prueba función suma()`, ()=>{
    test(`Si recibo 2 args, retorna la suma de ambos`, ()=>{
        expect(suma(5, 4)).toBe(9)
        expect(suma(10, 10)).toBe(20)
        expect(suma(-5, 15)).toBe(10)
    })

    test(`Si recibo algo no numérico, retorna "error"`, ()=>{
        expect(suma(false, 100)).toBe("error")
        expect(suma(200, 100, 109, ["carlos"], 4)).toBe("error")
    })

    test(`Si recibo n args, retorna la suma de todos ellos`, ()=>{
        expect(suma(1,2,3,4,5)).toBe(15)
        expect(suma(100, 100, -50)).toBe(150)
        expect(suma(9 ,9, 10)).toBe(28)
    })
})