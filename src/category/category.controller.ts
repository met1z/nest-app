import { Controller, Post, Body } from '@nestjs/common'
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
}
