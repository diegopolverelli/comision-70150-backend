import passport from "passport"
import local from "passport-local"
import jwt from "passport-jwt"
import { usuariosModelo } from "../dao/models/usuariosModelo.js"
import { generaHash, validaPass } from "../utils.js"
import { config } from "./config.js"

export const initPassport=()=>{

    passport.use("registro",
        new local.Strategy(
            {
                // usernameField: "email",
                passReqToCallback: true
            },
            async(req, username, password, done)=>{
                try {
                    let {first_name, role, email}=req.body
                    if(!first_name || !email){
                        console.log(`Faltan datos`)
                        return done(null, false, {info:`Faltan datos`})
                    }

                    let existe=await usuariosModelo.findOne({username})
                    if(existe){
                        console.log(`username existe`)
                        return done(null, false)
                    }

                    existe=await usuariosModelo.findOne({email})
                    if(existe){
                        console.log(`email existe`)
                        return done(null, false)
                    }

                    // resto validaciones pertinentes

                    password=generaHash(password)

                    let nuevoUsuario=await usuariosModelo.create({
                        first_name, email, username, role, password
                    })

                    return done(null, nuevoUsuario)
                } catch (error) {
                    return done(error)
                }
            }
        )
    )

    passport.use("login", 
        new local.Strategy(
            {},
            async(username, password, done)=>{
                try {
                    let usuario=await usuariosModelo.findOne({username}).lean()
                    if(!usuario){
                        console.log("No encuentra usuario")
                        return done(null, false)
                    }

                    if(!validaPass(password, usuario.password)){
                        console.log("Password incorrecta")
                        return done(null, false)
                    }

                    return done(null, usuario)
                } catch (error) {
                    return done(error)
                }
            }
        )
    )

    passport.use("jwt", 
        new jwt.Strategy(
            {
                secretOrKey: config.SECRET, 
                jwtFromRequest: new jwt.ExtractJwt.fromAuthHeaderAsBearerToken()
            },
            async(usuario, done)=>{
                try {
                    return done(null, usuario)
                } catch (error) {
                    return done(error)
                }
            }
        )
    )


}
