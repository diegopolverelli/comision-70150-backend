import { Router } from 'express';
import jwt from "jsonwebtoken"
import passport from 'passport';
import { UsuariosDTO } from '../DTO/UsuariosDTO.js';
import { config } from '../config/config.js';
export const router=Router()

router.post('/register', passport.authenticate("registro", {session:false}), (req,res)=>{

    // passport.authenticate, si sale OK, deja un req.user    

    res.setHeader('Content-Type','application/json')
    res.status(200).json({status:"Login Exitoso", usuarioRegistrado: new UsuariosDTO(req.user)})
})

router.post("/login", passport.authenticate("login", {session:false}), (req, res)=>{

    let usuarioLogueado= new UsuariosDTO(req.user)
    let usuarioParaToken={
        ...usuarioLogueado
    }

    console.log(usuarioLogueado)
    console.log(usuarioParaToken)

    let token=jwt.sign(usuarioParaToken, config.SECRET, {expiresIn: "1h"})

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({
        payload:"Login exitoso", 
        usuarioLogueado,
        token
    });
})