import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesModule } from './heroes/heroes.module';
import { VillanosModule } from './villanos/villanos.module';

@Module({
  imports: [HeroesModule, VillanosModule],
  controllers: [AppController],
  providers: [AppService],
  exports:[]
})
export class AppModule {
  // constructor(){

  // }

  // prueba(){
  //   return "hola prueba...!!!"
  // }
}
