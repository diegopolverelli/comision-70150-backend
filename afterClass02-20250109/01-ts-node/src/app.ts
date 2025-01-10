
// let nombre:string
// nombre="Pedro"
// console.log(nombre)

import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
const PORT=3000;

mongoose.connect("mongodb+srv://coderhouse:codercoder2023@cluster0.wpxpupc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=pruebaAfterclass02")
    .then(()=>{
        console.log("DB online!")
    })

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req:Request,res:Response)=>{

    let nombre:string="Marcelo"

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
