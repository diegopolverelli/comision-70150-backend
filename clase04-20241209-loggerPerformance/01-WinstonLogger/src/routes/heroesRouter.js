import { Router } from 'express';
export const router=Router()
import HeroesManager from '../manager/HeroesManager.js'

const heroesManager=new HeroesManager()

router.get('/',(req,res)=>{

    let heroes
    try {

        if(req.query.error){
            console.log(lalalala)
        }


        heroes=heroesManager.getHeroes()
    } catch (error) {
        // req.logger.log("error", error.message)
        req.logger.error(`${error.message}`)
        req.logger.http(`${error.message} - prueba log http`)
        req.logger.verbose(`${error.message} - prueba log verbose`)

        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error interno del servidor`})
    }

    req.logger.verbose(`Se ejecuto la ruta /api/heroes`)
    res.status(200).json({heroes})
})

router.post('/',(req,res)=>{
    let {name}=req.body
    if(!name){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete al menos la propiedad name`})
    }

    let propiedadesValidas=['name','alias','publisher','powers','team']
    let propiedadesHeroeNuevo=Object.keys(req.body)
    let valido=propiedadesHeroeNuevo.every(prop=>propiedadesValidas.includes(prop))

    if(!valido){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ha ingresado propiedades invalidas`, detalle:propiedadesValidas})
    }

    let heroes=heroesManager.getHeroes()
    let existe=heroes.find(heroe=>heroe.name.toLowerCase()===name.toLowerCase())
    if(existe){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`El heroe ${name} ya existe en DB`})
    }

    let id=1
    if(heroes.length>0){
        id=heroes[heroes.length-1].id+1
    }

    let heroeNuevo=heroesManager.createHeroe({id, ...req.body})

    res.setHeader('Content-Type','application/json');
    return res.status(201).json({payload:heroeNuevo});

})