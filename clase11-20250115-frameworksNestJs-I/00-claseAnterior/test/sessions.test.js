import {expect} from "chai"
import {describe, it} from "mocha"
import mongoose from "mongoose"
import supertest from "supertest"


await mongoose.connect("mongodb+srv://coderhouse:codercoder2023@cluster0.wpxpupc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=clase09")


const requester=supertest("http://localhost:8080")

describe("Pruebas sessions", async function(){
    this.timeout(8000)

    let cookie
    let userMock={ first_name:"Juan", last_name:"Lopez", email:"test@test.com", password:"123" }

    after(async()=>{
        await mongoose.connection.collection("users").deleteMany({email:"test@test.com"})
    })

    it("La ruta /api/sessions/register, si recibe un usuario valido, lo da de alta en DB", async()=>{

        let {body, status} = await requester.post("/api/sessions/register").send(userMock)

        // console.log(body)

        expect(body.status).to.be.ok
        
    })
    
    it("Con un usuario previamente registrado, enviado a la ruta /api/sessions/login, puedo acceder al sistema, y se genera una cookie", async()=>{
        let {body, header} = await requester.post("/api/sessions/login").send(userMock)
        
        // console.log({body, header})

        let cookies=header["set-cookie"]
        cookie=header["set-cookie"][0]
        let nombreCookie=cookies[0].split("=")[0]
        // console.log(nombreCookie)
        
        expect(body.status).to.be.ok
        expect(nombreCookie).to.be.eq("coderCookie")
        
    })

    it("Si envío una peticion post a /api/sessions/current, con una cookie coderCookie conteniendo un token valido, responde los datos del usuario", async()=>{
        let {body}=await requester.get("/api/sessions/current").set("Cookie", cookie)
        
        // console.log(body)
        expect(body.status).to.be.ok
        expect(body.payload.email).to.be.eq(userMock.email)
        
    })

    it("La ruta /api/sessions/register, si recibe un usuario sin email, retorna un status 400", async()=>{
        let userMock2={ first_name:"Juan", last_name:"Lopez", password:"123" }
        let {status} = await requester.post("/api/sessions/register").send(userMock2)

        // console.log(body)

        expect(status).to.be.eq(400)
        
    })
})
