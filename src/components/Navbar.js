import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

class Navbar extends Component {
    //create handleLogoutClick method for clearing AuthToken below

    renderLogoutLink() {
        return (
            <div className='Header__logged-in'>
              <Link
                onClick={this.handleLogoutClick}
                to='/'>
                Logout
              </Link>
            </div>
          )
    }

    renderLoginLink() {
        return (
            <div className='Header__not-logged-in'>
              <li>
              <Link
                to='/register'>
                Register
              </Link></li>
              <li>
              <Link
                to='/login'>
                Log in
              </Link></li>
            </div>
          )
    }

  render() {
    return (
      <header>
        <div className="appName">
        <Link to='/'>
        Homely
        </Link></div>

        <nav className="navigation">
          <ul className="siteNav">
            <li>
              {this.renderLogoutLink()}
            </li>
            <li>
              {this.renderLoginLink()}
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;
