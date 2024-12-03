import express from 'express';
import { router as heroesRouter } from './routes/heroesRouter.js';
import { errorHandler } from './middleware/errorHandler.js';

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/heroes', heroesRouter)


app.get('/',(req,res)=>{

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/error1',(req,res)=>{

    console.log(lalala)

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('ruta error 1');
})

app.get('/error2',async(req,res,next)=>{

    let {dato}=req.query
    try {
        if(dato){
            console.log(lalala)
        }
        
    } catch (error) {
        // res.setHeader('Content-Type','application/json');
        // return res.status(500).json({error:`Error interno server: ${error.message}`})
        return next(error) // OJO QUE EN CLASE NO PUSE EL RETURN...!!! y va... si no ejecuta la otra response de abajo y falla... :(
    }

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('ruta error 2');
})

app.use(errorHandler)

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
