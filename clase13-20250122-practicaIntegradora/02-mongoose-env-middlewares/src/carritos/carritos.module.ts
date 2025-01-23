import { Module } from '@nestjs/common';
import { CarritosService } from './carritos.service';
import { CarritosController } from './carritos.controller';
import { ProductosModule } from 'src/productos/productos.module';

@Module({
  imports:[ProductosModule],
  controllers: [CarritosController],
  providers: [CarritosService],
})
export class CarritosModule {}
