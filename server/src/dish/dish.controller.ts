import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {DishService} from "./dish.service";
import {Dish} from "./dish.entity";

@Controller('dishes')
export class DishController {
    constructor(private readonly dishService: DishService) {
    }

    @Get("")
    getDishes() {
        return this.dishService.findAll();
    }

    @Post()
    postDish(@Body() dish: Dish) {
        return this.dishService.save(dish);
    }

    @Get(":id")
    getDishById(@Param() params) {
        return this.dishService.findOne(params.id);
    }

    @Delete(":id")
    deleteDishById(@Param() params) {
        return this.dishService.remove(params.id);
    }

    @Get("random")
    getRandom() {
        return this.dishService.getRandom();
    }
}

