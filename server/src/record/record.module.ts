import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecordService } from './record.service';
import { RecordController } from './record.controller';
import { Record } from './record.entity';
import {DishModule} from "../dish/dish.module";

@Module({
    imports: [TypeOrmModule.forFeature([Record]), DishModule],
    providers: [RecordService],
    controllers: [RecordController],
})
export class RecordModule {}
