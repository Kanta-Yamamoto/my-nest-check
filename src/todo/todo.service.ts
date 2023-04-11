// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Todo } from '../entities/todo.entity';

// @Injectable()
// export class TodoService {
//   constructor(
//     @InjectRepository(Todo)
//     private readonly todoRepository: Repository<Todo>,
//   ) {}

//   async findAll(): Promise<Todo[]> {
//     return this.todoRepository.find();
//   }

//   async findOne(id: number): Promise<Todo> {
//     return this.todoRepository.findOne(id);
//   }

//   async create(todo: Todo): Promise<Todo> {
//     return this.todoRepository.save(todo);
//   }

//   async update(id: number, todo: Todo): Promise<Todo> {
//     await this.todoRepository.update(id, todo);
//     return this.todoRepository.findOne(id);
//   }

//   async delete(id: number): Promise<void> {
//     await this.todoRepository.delete(id);
//   }
// }

// src/todo/todo.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './models/todo.models';

@Injectable()
export class TodoService {
  // 今回はDBと接続しないのでメモリ上にTodoを保存します。
  private todos: Todo[] = [];

  // 全件取得のメソッド
  findAll(): Todo[] {
    return this.todos;
  }
  // idを元に一件取得のメソッド
  findOneById(id: string): Todo {
    const result = this.todos.find((todo) => id === todo.id);
    if (!result) {
      // なかったら404エラーを返す。ビルトインのエラーも豊富にあってエラー処理も結構楽
      // https://docs.nestjs.com/exception-filters#built-in-http-exceptions
      throw new NotFoundException();
    }
    return result;
  }
}