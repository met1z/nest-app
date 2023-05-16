import { IsEnum, IsOptional, IsString } from 'class-validator'
import { PostStatus } from '../post-status.enum'

export class GetPostDto {
	@IsString()
	@IsOptional()
	readonly title?: string

	@IsEnum(PostStatus)
	@IsOptional()
	readonly status?: PostStatus
}
