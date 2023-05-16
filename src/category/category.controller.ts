import { Controller, Post, Body, Param, Get } from '@nestjs/common'
import { Category } from './entities/category.entity'
import { CreateCategoryDto } from './dto/create-category.dto'
import { CategoryService } from './category.service'

@Controller('category')
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {}

	@Post()
	create(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
		return this.categoryService.create(createCategoryDto)
	}

	@Get(':id')
	findOne(@Param('id') id: string): Promise<Category[]> {
		return this.categoryService.findOne(id)
	}
}
