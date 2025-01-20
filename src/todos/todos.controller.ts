import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDTO } from './dtos/create-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  create(@Body() dto) {
    return this.todosService.create(dto);
  }

  @Get()
  findMany() {
    return this.todosService.findMany();
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: CreateTodoDTO) {
    return this.todosService.update(id, dto);
  }
}
