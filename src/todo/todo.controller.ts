// import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
// import { TodoService } from './todo.service';
// import { Todo } from '../entities/todo.entity';

// @Controller('todo')
// export class TodoController {
//   constructor(private readonly todoService: TodoService) {}

//   @Get()
//   async findAll(): Promise<Todo[]> {
//     return this.todoService.findAll();
//   }

//   @Get(':id')
//   async findOne(@Param('id') id: number): Promise<Todo> {
//     return this.todoService.findOne(id);
//   }

//   @Post()
//   async create(@Body() todo: Todo): Promise<Todo> {
//     return this.todoService.create(todo);
//   }

//   @Put(':id')
//   async update(@Param('id') id: number, @Body() todo: Todo): Promise<Todo> {
//     return this.todoService.update(id, todo);
//   }

//   @Delete(':id')
//   async delete(@Param('id') id: number): Promise<void> {
//     return this.todoService.delete(id);
//   }
// }
