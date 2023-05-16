import { Injectable, NotFoundException, Param } from '@nestjs/common'
import { CreatePostDto } from './dto/create-post.dto'
import { UpdatePostDto } from './dto/update-post.dto'
import { PostRepository } from './repository/post.repository'
import { Post as PostEntity } from './entities/post.entity'

@Injectable()
export class PostService {
	constructor(private readonly postRepository: PostRepository) {}

	create(createPostDto: CreatePostDto): Promise<PostEntity> {
		const newPost = this.postRepository.create(createPostDto)
		return this.postRepository.save(newPost)
	}

	findAll() {
		return this.postRepository.find()
	}

	async findOne(@Param('id') id: string): Promise<PostEntity[]> {
		const post = await this.postRepository.findBy({ id })

		if (!post.length) {
			throw new NotFoundException('Post not found')
		}

		return post
	}

	async update(id: string, updatePostDto: UpdatePostDto): Promise<PostEntity> {
		const oldPost = await this.findOne(id)

		if (!oldPost.length) {
			throw new NotFoundException('Post not found')
		}

		const editedPost = { ...oldPost[0], ...updatePostDto }
		return await this.postRepository.save(editedPost)
	}

	async remove(@Param('id') id: string): Promise<void> {
		const result = await this.postRepository.delete(id)

		if (result.affected === 0) {
			throw new NotFoundException(`Post ${id} not exists`)
		}
	}
}
