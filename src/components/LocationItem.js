import React, { Component } from "react";
import "./LocationItem.css";

class LocationItem extends Component {
  render() {
    return (
      <div>
        <main role="main">
      <header>
        <h1>The White House</h1>
      </header>
      <section>
        <div className="location-detail">
          <p>Address:1600 Pennsylvania Ave NW, Washington DC, 20500</p>
          <p>Notes: Lovely exteriors, spatial front yard, but kitchens need renovation. Plenty of natural light. Spacious living areas but air conditioning will need to be replaced. Cabinets are outdated. Furniture will not be included.</p>
          <a href ="https://zillow.com/homes" target="_blank" rel="noopener noreferrer">Link</a>
          <div className="post-ratings">
          <p>Price: 1</p>
          <p>Size: 5</p>
          <p>Location: 3</p>
          </div>
          <button type="submit">Edit</button>
          <button type="submit">Cancel</button>
          <button type="submit">Delete</button>
        </div>
      </section>
    </main>
        <footer>(c) 2020</footer>
      </div>
    );
  }
}

export default LocationItem;