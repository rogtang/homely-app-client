import React, { Component } from 'react';
import './RegistrationPage.css';
import AuthApiService from '../services/auth-api-service'

class RegistrationPage extends Component {
  static defaultProps = {
    history: {
        push: () => { }
    }
}

  //Add onChange methods for username and password to update state below

  handleRegistrationSuccess = user => {
    //or try: window.location = '/login'
    const { history } = this.props
    history.push('/login')
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const { username, password } = ev.target

    this.setState({ error: null })
     AuthApiService.postUser({
       username: username.value,
       password: password.value,
     })
    .then(user => {
      username.value = ''
      password.value = ''
      this.handleRegistrationSuccess()
      })
     .catch(res => {
       this.setState({ error: res.error })
     })
  }

  render() {
    return (
      <div className="register">
        <h1>Welcome Homely</h1>
        <div className="register__form">
          <form
          className='RegistrationForm'
          onSubmit={this.handleSubmit}
          >
            <h2>Register</h2>
            <div className="register__form__credentials">
            <label htmlFor='RegistrationForm__username'>Email address: </label>
              <input type="text" placeholder="Enter your email address" name="username" id="RegistrationForm__username" required/>
            <label htmlFor='RegistrationForm__password'>Password: </label>
              <input type="password" placeholder="Choose a password" name="password" id="RegistrationForm__password" required/>
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