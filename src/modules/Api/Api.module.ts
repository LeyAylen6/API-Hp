import { Module } from "@nestjs/common";
import { CharactersModule } from "./Characters/Characters.module";

@Module({
    imports: [CharactersModule],
    providers: [], 
    controllers: [],
    exports: []
})

export class ApiModule { };