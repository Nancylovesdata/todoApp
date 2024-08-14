// import { Injectable } from '@angular/core';
// import { Store } from '@ngxs/store';
// import { AddTodo, ToggleTodo } from './store/todo.state';
// import { Todo } from './store/todo.state';

// @Injectable({
//   providedIn: 'root'
// })
// export class TodoService {

//   constructor(private store: Store) {}

//   addTodo(todo: Todo) {
//     this.store.dispatch(new AddTodo(todo));
//   }

//   toggleTodo(id: number) {
//     this.store.dispatch(new ToggleTodo(id));
//   }
// }



// import { Injectable } from '@angular/core';
// import { Store } from '@ngxs/store';
// import { AddTodo, ToggleTodo } from './store/todo.state';
// import { Todo } from './store/todo.state';

// @Injectable({
//   providedIn: 'root'
// })
// export class TodoService {

//   constructor(private store: Store) {}

//   addTodo(todo: Todo) {
//     this.store.dispatch(new AddTodo(todo));
//   }

//   toggleTodo(id: number) {
//     this.store.dispatch(new ToggleTodo(id));
//   }
// }

// src/app/todo.service.ts

import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddTodo, ToggleTodo, RemoveTodo } from './store/todo.actions';  // Import the new RemoveTodo action
import { Todo } from './store/todo.state';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private store: Store) {}

  // Dispatch the AddTodo action
  addTodo(todo: Todo) {
    this.store.dispatch(new AddTodo(todo));
  }

  // Dispatch the ToggleTodo action
  toggleTodo(id: number) {
    this.store.dispatch(new ToggleTodo(id));
  }

  // Dispatch the RemoveTodo action
  removeTodo(id: number) {
    this.store.dispatch(new RemoveTodo(id));
  }
}
