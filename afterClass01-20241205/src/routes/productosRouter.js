import {Router} from "express"
import ProductosController from "../controllers/ProductosController.js"
import passport from "passport"

export const router=Router()

router.get("/", ProductosController.getProductos)
router.post("/", passport.authenticate("jwt", {session:false}), ProductosController.createProducto)