import express from 'express';
import {saludo01, saludo02} from "saludos20241204"
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    // console.log(`Server escuchando en puerto ${PORT}`);
    console.log(saludo01(`Server escuchando en puerto ${PORT}`));
    console.log(saludo02(`Server escuchando en puerto ${PORT}`));
});
