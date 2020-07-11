import React, { Component } from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

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
            <h3>Make Your Search Easier</h3>
            <Link to="/login">Log in</Link> 
            <Link to="/register">Register</Link>
          </section>
        </main>
      </div>
    );
  }
}

export default LandingPage;
