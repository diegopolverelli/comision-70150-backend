import { Injectable } from '@nestjs/common';
import { CreateCarritoDto } from './dto/create-carrito.dto';
import { UpdateCarritoDto } from './dto/update-carrito.dto';
import { ProductosService } from 'src/productos/productos.service';


@Injectable()
export class CarritosService {

  private carritos=[]

  constructor(private productosService: ProductosService){}

  create(createCarritoDto: CreateCarritoDto) {
    return 'This action adds a new carrito';
  }

  async findAll() {
    let productos = await this.productosService.findAll()
    console.log(productos)

    return this.carritos
  }

  findOne(id: number) {
    return `This action returns a #${id} carrito`;
  }

  update(id: number, updateCarritoDto: UpdateCarritoDto) {
    return `This action updates a #${id} carrito`;
  }

  remove(id: number) {
    return `This action removes a #${id} carrito`;
  }
}
