import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { Hero } from './entities/hero.entity';

let heroes:Hero[]=[]

@Injectable()
export class HeroesService {
  create(createHeroDto: CreateHeroDto):Hero {
    let {name, alias} = createHeroDto
    let existe=heroes.find(h=>h.name==name)
    if(existe) throw new BadRequestException(`Ya existe el heroe ${name} en DB`)
    let id=1
    if(heroes.length>0){
      id=Math.max(...heroes.map(d=>d.id))+1
    }
    
    let nuevoHeroe={
      // id, ...createHeroDto
      id, name, alias
    }

    heroes.push(nuevoHeroe)

    // return 'This action adds a new hero';
    return nuevoHeroe;
  }

  findAll() {
    return `This action returns all heroes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hero`;
  }

  update(id: number, updateHeroDto: UpdateHeroDto) {
    return `This action updates a #${id} hero`;
  }

  remove(id: number) {
    return `This action removes a #${id} hero`;
  }
}
