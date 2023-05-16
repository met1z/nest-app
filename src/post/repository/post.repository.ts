import { Injectable } from '@nestjs/common'
import { DataSource, Repository } from 'typeorm'
import { Post } from '../entities/post.entity'
import { GetPostDto } from '../dto/get-posts.dto'

@Injectable()
export class PostRepository extends Repository<Post> {
	constructor(private dataSource: DataSource) {
		super(Post, dataSource.createEntityManager())
	}

	getPosts(getPostDto: GetPostDto): Promise<Post[]> {
		const { status, title } = getPostDto

		const query = this.createQueryBuilder('post')

		if (status) {
			query.andWhere('post.status = :status', { status })
		}

		if (title) {
			query.andWhere('post.title = :title', { title })
		}

		return query.getMany()
	}
}
