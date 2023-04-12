// import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { Todo } from '../entities/todo.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from '../entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async findOneById(id: number): Promise<Todo> {
    const result = await this.todoRepository.findOne(id);
    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }

  async create(todo: Partial<Todo>): Promise<Todo> {
    const newTodo = this.todoRepository.create(todo);
    return await this.todoRepository.save(newTodo);
  }

  async update(id: number, todo: Partial<Todo>): Promise<Todo> {
    await this.todoRepository.update(id, todo);
    return await this.findOneById(id);
  }

  async delete(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
