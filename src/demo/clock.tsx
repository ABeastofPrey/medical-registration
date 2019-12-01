import * as React from "react";

export class Clock extends React.Component {
  readonly state: { date: Date };
  private timerId: any;
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  public componentDidMount(): void {
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000);
  }

  public componentWillUnmount(): void {
    clearInterval(this.timerId);
  }

  public clickHandler(): void {
    console.log("clicked");
  }

  public render(): any {
    return (
      <div>
        <span>It's {this.state.date.toLocaleTimeString()}</span>
        <button onClick={this.clickHandler.bind(this)}>Click me</button>
      </div>
    );
  }
}
