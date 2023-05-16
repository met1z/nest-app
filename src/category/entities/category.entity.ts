import { Post } from 'src/post/entities/post.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Category {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column()
	title: string

	@OneToMany(() => Post, post => post.category)
	posts: Post[]
}
