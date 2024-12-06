import {ProductosDAO} from "../dao/ProductosDAO.js"

export default class ProductosController{
    static async getProductos(req, res){
        try {
            let productos=await ProductosDAO.get()
            res.setHeader('Content-Type','application/json');
            return res.status(200).json(productos);
        } catch (error) {
            console.log(error)
            res.setHeader('Content-Type','application/json');
            return res.status(500).json({error:`Error interno del servidor`})
        }
    }

    static async createProducto(req, res){
        let {title, code, price, stock}=req.body
        if(!title || !code || !price || !stock){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Complete todos los campos requeridos`})
        }

        try {
            let existe=await ProductosDAO.getBy({code})
            if(existe){
                res.setHeader('Content-Type','application/json');
                return res.status(400).json({error:`Ya existe un producto con code ${code}`})
            }
    
            // resto validaciones pertinentes
            let nuevoProducto=await ProductosDAO.create({title, code, stock, price})
            res.setHeader('Content-Type','application/json');
            return res.status(201).json({payload:"Producto creado con éxito", nuevoProducto});
            
        } catch (error) {
            console.log(error)
            res.setHeader('Content-Type','application/json');
            return res.status(500).json({error:`Error interno del servidor`})
        }

    }
}
