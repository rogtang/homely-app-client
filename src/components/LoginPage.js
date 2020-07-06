import React, { Component } from 'react';
import './LoginPage.css';
import AuthApiService from '../services/auth-api-service'
import TokenService from '../services/token-service'

class LoginPage extends Component {
  static defaultProps = {
    handleLoginSuccess: () => {}
  }

  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    //or try: window.location = '/posts'
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/posts'
    history.push(destination)
  }

//Add onChange methods for username and password to update state below



  handleSubmitBasicAuth = ev => {
    ev.preventDefault()
    const { username, password } = ev.target

    TokenService.saveAuthToken(
         TokenService.makeBasicAuthToken(username.value, password.value)
         )

    username.value = ''
    password.value = ''
    this.handleLoginSuccess()
  }

  handleSubmitJwtAuth = e => {
       e.preventDefault()
       this.setState({ error: null })
       const { username, password } = e.target
    
       AuthApiService.postLogin({
         username: username.value,
         password: password.value,
       })
         .then(res => {
           username.value = ''
           password.value = ''
           TokenService.saveAuthToken(res.authToken)
           this.handleLoginSuccess()
         })
         .catch(res => {
           this.setState({ error: res.error })
         })
     }

  render() {
    return (
      <div className="login">
        <h1>Great To See You Again</h1>
        <div className="login__form">
        <form
          className='LoginForm'
          onSubmit={this.handleSubmitJwtAuth}
          >
            <h2>Login</h2>
            <div className="login__form__credentials">
            <label htmlFor='LoginForm__username'>Enter your email/username:</label>
              <input type="text" placeholder="Email address" name="username" id="LoginForm__username" required/>
              <label htmlFor='LoginForm__password'>Enter your password:</label>
              <input type="password" placeholder="Password" name="password" id="password" required/>
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