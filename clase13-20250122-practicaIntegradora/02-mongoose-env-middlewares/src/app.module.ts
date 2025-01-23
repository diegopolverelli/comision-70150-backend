import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductosModule } from './productos/productos.module';
import { CarritosModule } from './carritos/carritos.module';
import { LoggerMiddleware } from './middlewares/logMiddleware';
import { METHODS } from 'http';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath:"./src/.env"}),
    // MongooseModule.forRoot('mongodb://localhost/nest')
    MongooseModule.forRoot(process.env.MONGO_URL),
    ProductosModule,
    CarritosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  constructor(){
    // console.log(process.env.PORT)
    // console.log(process.env.MONGO_URL)
  }
  configure(consumer: MiddlewareConsumer) {
    // throw new Error('Method not implemented.');
    consumer.apply(LoggerMiddleware).forRoutes({path:"*", method: RequestMethod.ALL})
  }
}

// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(LoggerMiddleware)
//       .forRoutes('cats');
//   }
// }
