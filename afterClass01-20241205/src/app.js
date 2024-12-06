import express from 'express';
import { config } from './config/config.js';
import { conectaDB } from './connDB.js';

import { initPassport } from './config/passport.config.js';
import passport from "passport"

import {router as productosRouter} from "./routes/productosRouter.js"
import { router as sessionsRouter } from './routes/sessionsRouter.js';

const PORT=config.PORT;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
initPassport()
app.use(passport.initialize())

app.use("/api/productos", productosRouter)
app.use("/api/sessions", sessionsRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

conectaDB(config.MONGO_URL, config.DB_NAME)
