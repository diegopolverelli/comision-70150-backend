import mongoose from "mongoose";

export const productosModelo=mongoose.model(
    "productos",
    new mongoose.Schema(
        {
            title: String, 
            price: Number, 
            stock: Number, 
            code: {type: String, unique: true}
        },
        {
            timestamps: true
        }
    )
)