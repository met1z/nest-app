import { Module } from '@nestjs/common'
import { PostService } from './post.service'
import { PostController } from './post.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Post } from './entities/post.entity'
import { PostRepository } from './repository/post.repository'
import { CategoryModule } from 'src/category/category.module'

@Module({
	imports: [TypeOrmModule.forFeature([Post]), CategoryModule],
	controllers: [PostController],
	providers: [PostService, PostRepository]
})
export class PostModule {}
