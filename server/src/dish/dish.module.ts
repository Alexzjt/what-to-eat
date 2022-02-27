import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DishService } from './dish.service';
import { DishController } from './dish.controller';
import { Dish } from './dish.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Dish])],
    providers: [DishService],
    controllers: [DishController],
    exports: [DishService]
})
export class DishModule {}
