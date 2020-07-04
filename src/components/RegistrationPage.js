import React, { Component } from 'react';
import './RegistrationPage.css';

class RegistrationPage extends Component {
  render() {
    return (
      <div className="register">
        <h1>Welcome Homely</h1>
        <div className="register__form">
          <form>
            <h2>Register</h2>
            <div className="register__form__credentials">
              <input type="text" placeholder="Pick a username" name="username" id="username"/>
              <input type="password" placeholder="Choose a password" name="password" id="password"/>
            </div>
            <div className="register__form__controls">
              <input type="submit" value="Register" className="register__form__btn"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default RegistrationPage;