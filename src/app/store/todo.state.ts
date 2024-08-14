import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddTodo, ToggleTodo, RemoveTodo } from './todo.actions';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoStateModel {
  todos: Todo[];
}

@State<TodoStateModel>({
  name: 'todos',
  defaults: {
    todos: []
  }
})
export class TodoState {

  @Selector()
  static getTodos(state: TodoStateModel) {
    return state.todos;
  }

  @Action(AddTodo)
  addTodo(
    { getState, patchState }: StateContext<TodoStateModel>,
    { payload }: AddTodo
  ) {
    const state = getState();
    patchState({
      todos: [...state.todos, payload]
    });
  }

  @Action(ToggleTodo)
  toggleTodo(
    { getState, patchState }: StateContext<TodoStateModel>,
    { payload }: ToggleTodo
  ) {
    const state = getState();
    const todos = state.todos.map(todo =>
      todo.id === payload ? { ...todo, completed: !todo.completed } : todo
    );
    patchState({ todos });
  }

  @Action(RemoveTodo)
  removeTodo(
    { getState, patchState }: StateContext<TodoStateModel>,
    { payload }: RemoveTodo
  ) {
    const state = getState();
    patchState({
      todos: state.todos.filter(todo => todo.id !== payload)
    });
  }
}
