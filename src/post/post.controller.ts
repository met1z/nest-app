import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	Query
} from '@nestjs/common'
import { PostService } from './post.service'
import { CreatePostDto } from './dto/create-post.dto'
import { UpdatePostDto } from './dto/update-post.dto'
import { Post as PostEntity } from './entities/post.entity'
import { query } from 'express'
import { GetPostDto } from './dto/get-posts.dto'

@Controller('post')
export class PostController {
	constructor(private readonly postService: PostService) {}

	@Post()
	create(@Body() createPostDto: CreatePostDto): Promise<PostEntity> {
		return this.postService.create(createPostDto)
	}

	@Get()
	findAll(@Query() query: GetPostDto): Promise<PostEntity[]> {
		return this.postService.findAll(query)
	}

	@Get(':id')
	findOne(@Param('id') id: string): Promise<PostEntity[]> {
		return this.postService.findOne(id)
	}

	@Patch(':id')
	update(
		@Param('id') id: string,
		@Body() updatePostDto: UpdatePostDto
	): Promise<PostEntity> {
		return this.postService.update(id, updatePostDto)
	}

	@Delete(':id')
	remove(@Param('id') id: string): Promise<void> {
		return this.postService.remove(id)
	}
}
