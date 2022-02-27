import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Record } from './record.entity';
import {DishService} from "../dish/dish.service";

@Injectable()
export class RecordService {
    constructor(
        @InjectRepository(Record) private recordRepository: Repository<Record>,
        private dishService: DishService,
    ) {}

    findAll(): Promise<Record[]> {
        return this.recordRepository.find({relations: ['dishes'], order: {id: 'DESC'}});
    }

    findOne(id: string): Promise<Record> {
        return this.recordRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.recordRepository.delete(id);
    }

    async save(record: Record): Promise<Record> {
        record.dishes.forEach(dish => {
            dish.lastEatTime = new Date();
        });
        await this.dishService.saveAll(record.dishes);
        return this.recordRepository.save(record);
    }
}
