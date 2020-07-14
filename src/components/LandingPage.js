import React, { Component } from "react";
import "./LandingPage.css";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <main role="main">
          <header className="landing-page-header">
            <h1>Homely</h1>
            <h2>Your house hunting assistant.</h2>
          </header>
          <section className='landing-intro'>
            <div className="container">
            <header>
              <h3>Focus on finding the perfect home, not the details.</h3>
            </header><br/>
            <p className="landing-page one">
              <br/> Research indicates the average buyer will visit 10 houses over 10
              weeks before finding the right place. The search for the perfect
              place to live can be a whirlwind of open houses and scrolling
              through countless online listings in a short amount of time. Let
              Homely help out and keep your search organized so you can start
              focusing on moving into your dream place.
            </p>
            </div>
          </section>
          <section className='landing-detail'>
            <header>
              <h3>How Homely Can Help</h3>
            </header>
            <p className="landing-page two">
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
          </section>
        </main>
      </div>
    );
  }
}

export default LandingPage;
