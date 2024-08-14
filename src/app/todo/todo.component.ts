

import { Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Todo, TodoState } from '../store/todo.state';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  todos$: Observable<Todo[]> = inject(Store).select(TodoState.getTodos);

  newTodo: string = '';

  constructor(private todoService: TodoService) {}

  addTodo() {
    if (this.newTodo.trim()) {
      const todo: Todo = {
        id: Math.floor(Math.random() * 10000),
        title: this.newTodo,
        completed: false
      };
      this.todoService.addTodo(todo);
      this.newTodo = '';  // Clear the input after adding
      console.log('Added todo:', todo);
    }
  }

  toggleTodo(id: number) {
    this.todoService.toggleTodo(id);
  }

  removeTodo(id: number) {
    this.todoService.removeTodo(id);
  }
}
