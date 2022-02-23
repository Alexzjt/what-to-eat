import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private categoryRepository: Repository<Category>
    ) {}

    findAll(): Promise<Category[]> {
        return this.categoryRepository.find();
    }

    findOne(id: string): Promise<Category> {
        return this.categoryRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.categoryRepository.delete(id);
    }

    save(category: Category): Promise<Category> {
        return this.categoryRepository.save(category);
    }

    findAllWithDishes(): Promise<Category[]> {
        return this.categoryRepository.find({relations: ['dishes']})
    }
}
