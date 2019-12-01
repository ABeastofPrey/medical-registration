import * as React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "./actions";

export interface ITodo {
  id: number;
  content: string;
  completed: boolean;
}

class Todo extends React.Component {
  readonly props: {
    todo: ITodo;
    toggleTodo: Function;
  };
  public render(): any {
    return (
      <li onClick={() => this.props.toggleTodo(this.props.todo.id)}>
        {this.props.todo && this.props.todo.completed ? "👌" : "👋"}{" "}
        <span>{this.props.todo.content}</span>
      </li>
    );
  }
}

export default connect(
  null,
  { toggleTodo }
)(Todo) as any;
