import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posts } from 'src/entity/post.entity';


@Module({
  controllers: [PostsController],
  imports: [TypeOrmModule.forFeature([Posts])],

  providers: [PostsService]
})
export class PostsModule {}
