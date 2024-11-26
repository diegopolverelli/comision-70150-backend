// console.log(process.env)

// node --env-file ./src/.env script01.js

// process.loadEnvFile("./src/.env")
// console.log(process.env.PORT)
// console.log(process.env.PRUEBA_PORT)

import express from 'express';
import { config } from './config/04-config.js';
// const PORT=3000;
const PORT=config.PORT;
console.log(config.PRUEBA_PORT)

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
