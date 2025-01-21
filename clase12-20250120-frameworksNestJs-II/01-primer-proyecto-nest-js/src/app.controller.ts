import { BadRequestException, Controller, Get, HttpException, HttpStatus, NotFoundException, Param, ParseIntPipe, Query, UnauthorizedException } from '@nestjs/common';
import { AppService } from './app.service';
import { productosInteface } from './interfaces/productos';

@Controller("api/pruebas")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("saludo")
  getHello(): string {
    return this.appService.getHello();
    // return "hola";
  }

  @Get("productos")
  // mostrarProductos(@Query("limit") limit:string, @Query("skip", ParseIntPipe) skip:number):productosInteface[]{
  mostrarProductos(@Query("limit") limit:string, @Query("skip", new ParseIntPipe({optional:true})) skip:number):productosInteface[]{

    console.log(limit)
    let limiteNumero=Number(limit)
    if(isNaN(limiteNumero)){
      throw new HttpException("Argumento limit debe ser numérico", HttpStatus.BAD_REQUEST)
      // throw new BadRequestException("Argumento limit debe ser numérico")
      // throw new UnauthorizedException("No existen usuarios autenticados")
    }

    return this.appService.getProductos(limiteNumero, skip)
    // return ["prod1","prod2"]
  }


  @Get("productos/:id")
  retornaUnProducto(@Param("id", ParseIntPipe) idProducto:number){
    // return `Devolverá el producto con id ${idProducto}`
    let producto=this.appService.getProductById(idProducto)
    if(!producto) throw new NotFoundException(`No existen productos con id ${idProducto}`)
    return 
  }

  


}

let nombre:string="Juan"
let edad:number
interface PersonaInterface{
  nombre:string
  email:string
}

let juan:PersonaInterface
juan={
  nombre:"Juan", email:"juan@test.com"
}

type dato={
  tipo:string, 
  valor:number|string
}

let dato01:dato={
  tipo: '',
  valor: 100
}

class Hero{
  nombre:string
  alias:string
  constructor(nombre, alias){
    this.nombre=nombre
    this.alias=alias
  }
}

let batman:Hero={
  nombre: 'Batman',
  alias: 'Bruce Wayne'
}

