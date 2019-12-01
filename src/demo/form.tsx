import * as React from "react";

enum FormOptions {
  Name = "nameOp",
  Gender = "genderOp"
}

export class InfoForm extends React.Component {
  readonly state: {
    [FormOptions.Name]: string;
    [FormOptions.Gender]: string;
  };
  constructor(props) {
    super(props);
    this.state = {
      [FormOptions.Name]: "",
      [FormOptions.Gender]: ""
    };
  }

  private changeHandler(event): void {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  private submitHandler(event): void {
    const msg = `${this.state[FormOptions.Name]}, ${
      this.state[FormOptions.Gender]
    }`;
    alert(msg);
    event.preventDefalut();
  }

  public render(): any {
    return (
      <form onSubmit={this.submitHandler.bind(this)}>
        Name:&nbsp;
        <input
          name={FormOptions.Name}
          value={this.state[FormOptions.Name]}
          onChange={this.changeHandler.bind(this)}
        />
        <br />
        Gender:&nbsp;
        <select
          name={FormOptions.Gender}
          value={this.state[FormOptions.Gender]}
          onChange={this.changeHandler.bind(this)}
        >
          <option value={null}>--</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        <button type="submit">Submit Form</button>
      </form>
    );
  }
}
