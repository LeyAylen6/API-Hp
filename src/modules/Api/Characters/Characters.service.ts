import { Injectable } from "@nestjs/common";
import { Character } from "./entities/Character.entity";
import { CreateCharacterDto } from "./dtos/create-character.dto";

@Injectable()
export class CharactersService {
    repository: Character[]
    
    constructor() { 
        this.repository = [{
            id: 1,
            name: "Harry Potter", 
            age: 11,
            alive: true,
            house: "Gryffindor"
        }]
    }

    // All
    async findAll(): Promise<Character[]> {
        return this.repository
    }

    // By Id 
    async findById(id: number): Promise<Character> {
        return this.repository.find(char => char.id == id)
    }

    // By house
    async findByHouse(house: string): Promise <Character[]> {
        return this.repository.filter(char => char.house == house)
    }

    // Delete Character
    

    // New Character
    async create(createCharacterDto: CreateCharacterDto): Promise<Character> {
        const { name, house, alive, age } = createCharacterDto;

        const newCharacter: Character = {
            id: this.repository.length + 1, 
            name, 
            house, 
            alive, 
            age
        }

        this.repository.push(newCharacter)
        
        return newCharacter;
    }
}