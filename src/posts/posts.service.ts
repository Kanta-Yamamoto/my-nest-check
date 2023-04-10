import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts } from '../entity/post.entity';


@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Posts)
        private readonly postRepository: Repository<Posts>,
      ) {}
    
      store(title: string, description: string) {
        const post = new Posts();
        post.title = title;
        post.description = description;
        return this.postRepository.save(post);
      }
    
      get() {
        return this.postRepository.find();
      }
    
      async update(id, title: string, description: string) {
        const post = await this.postRepository.findOne(id);
        post.title = title;
        post.description = description;
        return this.postRepository.save(post);
      }
    
      async delete(id: number) {
        const post = await this.postRepository.findOne(id);
        return this.postRepository.remove(post);
      }
}
