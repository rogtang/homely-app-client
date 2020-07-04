import React, { Component } from "react";
import "./LandingPage.css";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <main role="main">
          <header role="banner">
            <h1>Homely</h1>
            <h2>Your house hunting assistant.</h2>
          </header>
          <section>
            <header>
              <h3>Focus on finding the perfect home, not the details.</h3>
            </header>
            <p>
              Research indicates the average buyer will visit 10 houses over 10
              weeks before finding the right place. The search for the perfect
              place to live can be a whirlwind of open houses and scrolling
              through countless online listings in a short amount of time. Let
              Homely help out and keep your search organized so you can start
              focusing on moving into your dream place.
            </p>
            <a className="signup-form" href="/signup">
              Sign Up
            </a>
            <a className="login-form" href="/login">
              Log In
            </a>
          </section>
          <section>
            <header>
              <h3>How Homely Can Help</h3>
            </header>
            <p>
              Homely helps you keep track of all the houses and apartments
              you've visited. Quickly create a post for each place, assign it an
              alias as a handy reference, and make notes on your initial
              impressions and potential renovation ideas before you visit the
              next place and forget. Find out the description in the listing
              doesn't match reality? Jot it down.{" "}
              <strong>
                Add ratings for price, location, and size to see how they all
                stack up to each other.
              </strong>
            </p>
          </section>
          <section>
            <header>
              <h3>Make Your Search Easier</h3>
            </header>
            <form className="signup-form">
              <div>
                <label htmlFor="first-name">First name</label>
                <input
                  placeholder="First Name"
                  type="text"
                  name="first-name"
                  id="first-name"
                />
              </div>
              <div>
                <label htmlFor="last-name">Last name</label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Last Name"
                />
              </div>
              <div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" required />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required />
              </div>
              <button type="submit">Sign Up</button>
            </form>
            <form className="login-form">
              <div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" required />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required />
              </div>
              <button type="submit">Log In</button>
            </form>
          </section>
        </main>
        <footer>(c) 2020</footer>
      </div>
    );
  }
}

export default LandingPage;
