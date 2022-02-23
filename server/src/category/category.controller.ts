import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {CategoryService} from "./category.service";
import {Category} from "./category.entity";

@Controller('categories')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {
    }

    @Get("")
    getCategories() {
        return this.categoryService.findAll();
    }

    @Get("dishes")
    getCategoriesWithDishes() {
        return this.categoryService.findAllWithDishes();
    }

    @Post()
    postCategory(@Body() category: Category) {
        return this.categoryService.save(category);
    }

    @Get(":id")
    getCategoryById(@Param() params) {
        return this.categoryService.findOne(params.id);
    }

    @Delete(":id")
    deleteCategoryById(@Param() params) {
        return this.categoryService.remove(params.id);
    }
}
