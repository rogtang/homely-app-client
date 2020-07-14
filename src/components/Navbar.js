import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import TokenService from '../services/token-service'
import './Navbar.css'

class Navbar extends Component {

handleLogoutClick = () => {
  TokenService.clearAuthToken();
  window.location.assign('/');
}

renderLogoutLink() {
  return (
    <div className='Header__logged-in'>
      <NavLink
        to='/addpost'>
        Add Location
      </NavLink>
      <NavLink
        onClick={this.handleLogoutClick}
        to='/'>
        Logout
      </NavLink>
    </div>
  )
}

renderLoginLink() {
  return (
    <div className='Header__not-logged-in'>
      <NavLink
        to='/login'>
        Log in
      </NavLink>
      <NavLink
        to='/register'>
        Register
      </NavLink>
    </div>
  )
}

render() {
  return <>
    <nav className='Header'>
      <h1 className="header_link">
        <NavLink to='/posts'>
          Homely
        </NavLink>
      </h1>
      <span className='Header__tagline--wide'>Your house hunting assistant.</span>
      {TokenService.hasAuthToken()
        ? this.renderLogoutLink()
        : this.renderLoginLink()}
    </nav>

    <span className='Header__tagline--narrow'>Your house hunting assistant.</span>
  </>
}
}
export default Navbar;
