import { IsNumber, IsOptional, IsString } from "class-validator"

export class CreateProductoDto {

    @IsString()
    title: string

    @IsNumber()
    price: number
    
    @IsNumber()
    @IsOptional()
    stock?: number
}
