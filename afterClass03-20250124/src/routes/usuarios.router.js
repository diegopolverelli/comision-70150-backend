import { Router } from 'express';
import { User } from '../dao/models/usuariosModelo.js';
export const router=Router()

router.get('/',async(req,res)=>{

    try {
        let usuarios=await User.findAll()
    
        res.setHeader('Content-Type','application/json')
        res.status(200).json({usuarios})
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado: ${error.message}`})
    }
})

router.post("/", async(req, res)=>{

    let {name, email} = req.body
    if(!name || !email){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`name | email son requeridos!`})
    }

    try {
        let usuario=await User.create({name, email})
    
        res.setHeader('Content-Type','application/json')
        res.status(201).json({message:`Usuario generado!`, usuario})
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado: ${error.message}`})
    }

})