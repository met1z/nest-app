import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Category } from './entities/category.entity'
import { Repository } from 'typeorm'
import { CreateCategoryDto } from './dto/create-category.dto'

@Injectable()
export class CategoryService {
	constructor(
		@InjectRepository(Category)
		private categoryRepository: Repository<Category>
	) {}

	create(createCategoryDto: CreateCategoryDto): Promise<Category> {
		const newCategory = new Category()
		newCategory.title = createCategoryDto.title
		return this.categoryRepository.save(newCategory)
	}
}
