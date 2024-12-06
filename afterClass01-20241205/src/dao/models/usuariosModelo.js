import mongoose from "mongoose";

export const usuariosModelo=mongoose.model(
    "usuarios",
    new mongoose.Schema(
        {
            username: {type: String, unique: true}, 
            role: {type: String, default: "user"}, 
            password: String, 
            email: {type: String, unique: true},
            first_name: String
        },
        {
            timestamps: true
        }
    )
)