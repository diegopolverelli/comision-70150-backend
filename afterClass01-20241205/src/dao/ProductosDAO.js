import { productosModelo } from "./models/productosModelo.js";

export class ProductosDAO{
    static async get(){
        return await productosModelo.find().lean()
    }

    static async getBy(filtro={}){
        return await productosModelo.findOne(filtro).lean()
    }

    static async create(producto={}){
        let nuevoProducto=await productosModelo.create(producto)
        return nuevoProducto.toJSON()
    }

}