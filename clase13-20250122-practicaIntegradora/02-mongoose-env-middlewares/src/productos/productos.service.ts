import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Producto } from './schemas/productoSchema';
import { Model } from 'mongoose';

@Injectable()
export class ProductosService {

  constructor(@InjectModel(Producto.name) private productoModelo: Model<Producto>){}

  create(createProductoDto: CreateProductoDto) {
    return this.productoModelo.create(createProductoDto)
    // return 'This action adds a new producto';
  }

  pruebaProductos(){
    return "prueba"
  }

  async findAll() {
    let productos=await this.productoModelo.find()
    // console.log(productos)
    return productos
    // return `This action returns all productos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} producto`;
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
