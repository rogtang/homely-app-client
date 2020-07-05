import React, { Component } from 'react';
import './LoginPage.css';

class LoginPage extends Component {
  render() {
    return (
      <div className="login">
        <h1>Come On In</h1>
        <div className="login__form">
          <form>
            <h2>Login</h2>
            <div className="login__form__credentials">
              <input type="text" placeholder="Email address" name="username" id="username"/>
              <input type="password" placeholder="Password" name="password" id="password"/>
            </div>
            <div className="login__form__controls">
              <input type="submit" value="Sign In" className="login__form__btn"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;