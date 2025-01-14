import Users from "../../src/dao/Users.dao.js";
import mongoose, { isValidObjectId } from "mongoose";
import Assert from "assert"
import {describe, it} from "mocha"

const connection = await mongoose.connect('mongodb+srv://coderhouse:codercoder2023@cluster0.wpxpupc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=clase09')
// const connection = await mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.1&dbName=clase09')
const assert=Assert.strict

const usersDAO=new Users()

describe("Pruebas DAO Users", async function(){
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

        assert.equal(Array.isArray(resultado), true)
        if(Array.isArray(resultado) && resultado.length>0){
            // console.log("testea elemento [0] del resultado")
            assert.ok(resultado[0]._id)
            assert.ok(resultado[0].email)
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
        console.log(prueba)
        assert.equal(prueba, null)

        let resultado=await usersDAO.save(userMock)

        assert.ok(resultado._id)
        assert.ok(resultado.email)
        assert.equal(resultado.email, userMock.email)
        assert.equal(isValidObjectId(resultado._id), true)

        prueba=await mongoose.connection.collection("users").findOne({email:userMock.email})
        // console.log(prueba)
        assert.ok(prueba._id)
        assert.ok(prueba.email)
        assert.equal(prueba.email, userMock.email)
        assert.equal(isValidObjectId(prueba._id), true)        
    })
})
