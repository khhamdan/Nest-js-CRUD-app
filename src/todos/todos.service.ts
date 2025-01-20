import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todos.entity';
import { Repository } from 'typeorm';
import { CreateTodoDTO } from './dtos/create-todo.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  ) {}

  async create(dto: CreateTodoDTO) {
    const todo = this.todoRepository.create(dto);
    return await this.todoRepository.save(todo);
  }

  findMany() {
    // return this.todoRepository.find({ where: { id: 1 } });
    return this.todoRepository.find();
  }

  async update(id: number, dto: CreateTodoDTO) {
    const todo = await this.todoRepository.findOne({ where: { id } });

    // check that record exists
    Object.assign(todo, dto);

    return await this.todoRepository.save(todo);
  }

  async delete(id: number) {
    const todo = await this.todoRepository.findOne({ where: { id } });

    // check that record exists
    return await this.todoRepository.remove(todo);
  }
}
