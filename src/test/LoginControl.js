import React from 'react';

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

class Greeting extends React.Component {
	render() {
		if (this.props.isLoggedIn) {
			return <UserGreeting />;
		}
		return <GuestGreeting />;
	}
}


function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: true
		}

		this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
	}

	handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

	render() {
		let isLoggedIn = this.state.isLoggedIn
		let button;
		if (isLoggedIn) {
				button = <LogoutButton onClick={this.handleLogoutClick}/>
			} else {
				button = <LoginButton onClick={this.handleLoginClick}/>
		}

		return(
			<div>
				<Greeting isLoggedIn={isLoggedIn}/>
				{button}
			</div>
		)
	}

}

export default LoginControl;