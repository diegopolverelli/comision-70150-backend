import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from "mongoose"
import { Logger } from '@nestjs/common';
// let productos=[
//   { id: 1, code: 'PROD001', title: 'Camiseta Negra', stock: 20, price: 19.99, descrip: 'Camiseta de algodón', status: true },
//   { id: 2, code: 'PROD002', title: 'Pantalón Jeans', stock: 15, price: 39.99, descrip: 'Jeans clásico', status: true },
//   { id: 3, code: 'PROD003', title: 'Camisa Verde manga corta', stock: 12, price: 28.99, descrip: 'Camisa manga corta', status: true },
//   { id: 4, code: 'PROD004', title: 'Pantalón Verde', stock: 32, price: 39.99, descrip: 'Jeans clásico color', status: true },
//   { id: 5, code: 'PROD005', title: 'Camisa Negra manga corta', stock: 20, price: 28.99, descrip: 'Camisa manga corta', status: false },
//   { id: 6, code: 'PROD006', title: 'Pantalón Corto', stock: 14, price: 39.99, descrip: 'Pantalon deportivo corto', status: true },
//   { id: 7, code: 'PROD007', title: 'Camiseta Roja', stock: 20, price: 19.99, descrip: 'Camiseta de algodón', status: true },
//   { id: 8, code: 'PROD008', title: 'Camisa Blanca', stock: 21, price: 32.99, descrip: 'Camisa de vestir', status: true },
//   { id: 9, code: 'PROD009', title: 'Camiseta Celeste', stock: 32, price: 19.99, descrip: 'Camiseta de algodón', status: false },
//   { id: 10, code: 'PROD010', title: 'Camisa Blanca manga corta', stock: 7, price: 28.99, descrip: 'Camisa manga corta', status: true },
// ]

const conectar=async()=>{
  try {
    await mongoose.connect("mongodb+srv://coderhouse:codercoder2023@cluster0.wpxpupc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {dbName:"clase12"})
    Logger.verbose("DB online!", "main")
  } catch (error) {
    Logger.fatal("Error al conectar a DB...!!!")
  }

}

conectar()


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.get("/", (req, res)=>{
  //   res.setHeader('Content-Type','application/json');
  //   return res.status(200).json({payload:productos});
  // })
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
