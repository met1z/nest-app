import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { PostStatus } from '../post-status.enum'
import { Category } from 'src/category/entities/category.entity'

@Entity()
export class Post {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column()
	title: string

	@Column()
	body: string

	@Column()
	status: PostStatus

	@ManyToOne(() => Category, category => category.posts)
	category: Category
}
