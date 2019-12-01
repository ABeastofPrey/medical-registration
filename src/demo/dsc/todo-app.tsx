import * as React from "react";
import TodoAdd from "./todo-add";
import TodoList from "./todo-list";
import TodoFilter from "./todo-filter";

export class TodoApp extends React.Component {
  public render(): any {
    return (
      <div className="todo-app">
        <h1>Todo List</h1>
        <TodoAdd />
        <TodoList />
        <TodoFilter />
      </div>
    );
  }
}
