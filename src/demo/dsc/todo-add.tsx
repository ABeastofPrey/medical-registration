import * as React from "react";
import { connect } from "react-redux";
import { addTodo } from "./actions";
import { Button, InputItem } from "antd-mobile";

class AddTodo extends React.Component {
  readonly props: { addTodo: Function };
  readonly state: { input: string };

  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  inputChange = input => {
    this.setState({ input });
  };

  addTodoHandler = () => {
    if (!this.state.input) return;
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  public render(): any {
    return (
      <div>
        <InputItem
          type="text"
          placeholder="Name"
          clear
          value={this.state.input}
          onChange={value => this.inputChange(value)}
        >
          Todo
        </InputItem>
        <Button
          style={{ marginLeft: "5px" }}
          type="primary"
          size="small"
          icon="check-circle-o"
          inline
          onClick={this.addTodoHandler}
        >
          Add todo
        </Button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
