import * as React from "react";
import { connect } from "react-redux";
import { ITodo } from "./todo";
import Todo from "./todo";
import { getTodosByVisibilityFilter } from "./selectors";

export class TodoList extends React.Component {
  readonly props: { todos: ITodo[] };
  public render(): any {
    return (
      <ul>
        {this.props.todos && this.props.todos.length
          ? this.props.todos.map((todo, index) => {
              return <Todo key={`todo-${todo.id}`} todo={todo} />;
            })
          : "No todos, yay!"}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
