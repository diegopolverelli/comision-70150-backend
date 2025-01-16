import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
    // return "Hola";
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

