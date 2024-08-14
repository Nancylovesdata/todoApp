

import { Todo } from './todo.state';

// Action to add a new todo item
export class AddTodo {
  static readonly type = '[Todo] Add';
  constructor(public payload: Todo) {}
}

// Action to toggle the completion status of a todo item
export class ToggleTodo {
  static readonly type = '[Todo] Toggle';
  constructor(public payload: number) {}
}

// Action to remove a todo item
export class RemoveTodo {
  static readonly type = '[Todo] Remove';
  constructor(public payload: number) {} 
}
