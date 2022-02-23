import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dish } from './dish.entity';

@Injectable()
export class DishService {
    constructor(
        @InjectRepository(Dish)
        private dishRepository: Repository<Dish>
    ) {}

    findAll(): Promise<Dish[]> {
        return this.dishRepository.find();
    }

    findOne(id: string): Promise<Dish> {
        return this.dishRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.dishRepository.delete(id);
    }

    save(dish: Dish): Promise<Dish> {
        return this.dishRepository.save(dish);
    }
}
