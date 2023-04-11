import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Posts } from "../entities/post.entity";



@Controller('posts')
export class PostsController {
    constructor(private readonly postService: PostsService) {}
    @Get()
    getData() {
      return this.postService.get();
    }
    @Post()
    postData(
      @Body('title') title: string,
      @Body('description') description: string,
    ) {
      return this.postService.store(title, description);
    }
    @Put(':id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body('title') title: string,
      @Body('description') description: string,
    ) {
      return this.postService.update(id, title, description);
    }
}
