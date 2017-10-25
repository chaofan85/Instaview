import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.userInfo;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text'
            value={this.state.username}
            placeholder='Username'
            onChange={this.handleChange('username')}></input>
          <input type='password'
            value={this.state.password}
            placeholder='Password'
            onChange={this.handleChange('password')}></input>
          <button>Sign Up</button>
        </form>

        <div></div>
      </div>
    );
  }
}

export default LoginForm;
