import { IsString } from "class-validator"

export class CreateHeroDto {

    // @IsString({message:"name es requerido y de tipo string"})
    @IsString()
    name: string
    
    @IsString()
    alias: string
}
