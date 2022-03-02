import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Raw, Repository} from 'typeorm';
import { Dish } from './dish.entity';

@Injectable()
export class DishService {
    constructor(
        @InjectRepository(Dish)
        private dishRepository: Repository<Dish>
    ) {}

    findAll(): Promise<Dish[]> {
        return this.dishRepository.find({relations: ['category']});
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

    saveAll(dishes: Dish[]): Promise<Dish[]> {
        return this.dishRepository.save(dishes);
    }

    // TODO
    async getRandom(): Promise<Dish> {
        const dishes = await this.dishRepository.find({
            lastEatTime: Raw("to_days(now()) - to_days(lastEatTime) > 14")
        });
        console.log(dishes);
        if (dishes.length === 0) {
            return this.dishRepository.findOne();
        }
        const index = Math.floor(Math.random() * dishes.length);
        return dishes[index];
    }
}
