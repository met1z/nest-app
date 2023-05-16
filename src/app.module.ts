import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PostModule } from './post/post.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { typeOrmAsyncConfig } from './config/typeorm.config'
import { CategoryModule } from './category/category.module';

@Module({
	imports: [
		PostModule,
		ConfigModule.forRoot({
			envFilePath: '.env',
			isGlobal: true
		}),
		TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
		CategoryModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
