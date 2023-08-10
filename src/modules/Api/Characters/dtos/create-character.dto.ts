import { IsString, IsNumber, IsBoolean, IsDefined } from "class-validator"

export class CreateCharacterDto {

    @IsDefined() // Not Null
    @IsString()
    name: string

    @IsDefined()
    @IsString()
    house: string

    @IsDefined()
    @IsNumber()
    age: number

    @IsDefined()
    @IsBoolean()
    alive: boolean
}