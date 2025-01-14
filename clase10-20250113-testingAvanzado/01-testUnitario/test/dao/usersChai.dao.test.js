import Users from "../../src/dao/Users.dao.js";
import mongoose, { isValidObjectId } from "mongoose";
import {expect} from "chai"
// import Assert from "assert"
import {describe, it} from "mocha"

const connection = await mongoose.connect('mongodb+srv://coderhouse:codercoder2023@cluster0.wpxpupc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=clase09')
// const connection = await mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.1&dbName=clase09')
// const assert=Assert.strict

const usersDAO=new Users()

describe("Pruebas DAO Users utilizando dependencia Chai", async function(){
    this.timeout(8000)

    before(async()=>{
        let existe=await mongoose.connection.collection("users").findOne({email:"test1@test.com"})
        if(!existe){
            await mongoose.connection.collection("users").insertOne({
                first_name:"testFirst_name1", 
                last_name:"testLast_name1", 
                email: "test1@test.com",
                password: "123"
            })
        }
    })
    beforeEach(async()=>{
        
    })
    afterEach(async()=>{
        await mongoose.connection.collection("users").deleteMany({email:"test@test.com"})
    })
    after(async()=>{

    })

    it("El método get retorna un array de usuarios", async ()=>{
        let resultado=await usersDAO.get()
        // console.log(resultado)

        // assert.equal(Array.isArray(resultado), true)
        expect(Array.isArray(resultado)).to.be.true
        expect(Array.isArray(resultado)).to.be.eq(true)

        if(Array.isArray(resultado) && resultado.length>0){
            // console.log("testea elemento [0] del resultado")
            // assert.ok(resultado[0]._id)
            expect(resultado[0]._id).to.be.ok
            expect(resultado[0]._id).to.exist
            // assert.ok(resultado[0].email)
            expect(resultado[0].email).to.be.ok
            expect(resultado[0].email).to.exist
        }

    })

    it("El método save graba un usuario en la DB", async ()=>{
        let userMock={
            first_name:"testFirst_name", 
            last_name:"testLast_name", 
            email: "test@test.com",
            password: "123"
        }        


        // console.log(resultado)

        let prueba=await mongoose.connection.collection("users").findOne({email:userMock.email})
        // console.log(prueba)
        // assert.equal(prueba, null)
        expect(prueba).to.be.null

        let resultado=await usersDAO.save(userMock)

        // assert.ok(resultado._id)
        expect(resultado._id).to.be.ok
        // assert.ok(resultado.email)
        expect(resultado.email).to.be.ok
        // assert.equal(resultado.email, userMock.email)
        expect(resultado.email).to.be.equal(userMock.email)
        // assert.equal(isValidObjectId(resultado._id), true)
        expect(isValidObjectId(resultado._id)).to.be.equal(true)
        expect(isValidObjectId(resultado._id)).to.be.true

        prueba=await mongoose.connection.collection("users").findOne({email:userMock.email})
        // console.log(prueba)
        // assert.ok(prueba._id)
        expect(prueba._id).to.be.ok

        console.log(typeof prueba._id.toString())
        expect(prueba).to.have.property("email").and.have.lengthOf(userMock.email.length)
        expect(prueba._id.toString()).to.be.ok.and.to.have.lengthOf.greaterThan(3) 
        // assert.ok(prueba.email)
        expect(prueba.email).to.be.ok
        // assert.equal(prueba.email, userMock.email)
        expect(prueba.email).to.be.eq(userMock.email)
        // assert.equal(isValidObjectId(prueba._id), true)        
    })
})
