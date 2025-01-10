"use strict";
// let nombre:string
// nombre="Pedro"
// console.log(nombre)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const PORT = 3000;
mongoose_1.default.connect("mongodb+srv://coderhouse:codercoder2023@cluster0.wpxpupc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=pruebaAfterclass02")
    .then(() => {
    console.log("DB online!");
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    let nombre = "Marcelo";
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('OK');
});
const server = app.listen(PORT, () => {
    console.log(`Server escuchando en puerto ${PORT}`);
});
