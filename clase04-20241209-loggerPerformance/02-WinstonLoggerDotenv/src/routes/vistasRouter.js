import { Router } from 'express';
import HeroesManager from '../manager/HeroesManager.js'
export const router=Router()

const heroesManager=new HeroesManager()

router.get('/',(req,res)=>{


    res.status(200).render('home')
})

router.get('/heroes',(req,res)=>{

    let heroes
    try {
        if(req.query.error){
            throw new Error(`Error de prueba...!!!`)
        }
        heroes=heroesManager.getHeroes()
    } catch (error) {

        req.logger.error(`${error.message}`)

        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error interno servidor`})
    }

    res.status(200).render('heroes', {
        heroes
    })
})