import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Dish} from "./dish/dish.entity";
import {DishModule} from "./dish/dish.module";
import {RecordModule} from "./record/record.module";
import {CategoryModule} from "./category/category.module";
@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'test',
      synchronize: true,
      autoLoadEntities: true
  }),DishModule, RecordModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
