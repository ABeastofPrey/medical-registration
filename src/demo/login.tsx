import * as React from "react";

const UserGreeting = () => <h1>Welcome back!</h1>;

const GuestGreeting = () => <h1>Please sign up.</h1>;

const Greeting = ({ isLoggedIn }) => {
  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
};

const LoginBtn = props => <button onClick={props.onClick}>Log in</button>;

const LogoutBtn = props => <button onClick={props.onClick}>Log out</button>;

export class LoginControl extends React.Component {
  readonly state: {
    isLoggedIn: boolean;
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  public loginHandler(): void {
    this.setState({
      isLoggedIn: true
    });
  }

  public logoutHandler(): void {
    this.setState({
      isLoggedIn: false
    });
  }

  public render(): any {
    const button = this.state.isLoggedIn ? (
      <LogoutBtn onClick={this.logoutHandler.bind(this)} />
    ) : (
      <LoginBtn onClick={this.loginHandler.bind(this)} />
    );
    return (
      <div>
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {button}
      </div>
    );
  }
}
