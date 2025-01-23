import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Producto>;

@Schema()
export class Producto {
  @Prop({unique:true})
  title: string;  // name: {type: String, unique:true}

  @Prop()
  price: number;

  @Prop({default:0})
  stock: number;
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);
