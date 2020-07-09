import React, { Component } from "react";
import "./LocationItem.css";
import Rating from "./Rating";


class LocationItem extends Component {

  render() {
    const {newHouse} = this.props
    console.log(newHouse)
    return (
      <div>
        <main role="main">
          <header className="location-item-header">
            <h1>{newHouse.name}</h1>
          </header>
          <section>
            <div className="location-detail">
              <p>{newHouse.address}</p>
              <p>
                {newHouse.usernotes}
              </p>
              <a
                href={newHouse.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
              <div className="post-ratings">
                <p>Price: <Rating value={newHouse.ratings.price}/></p>
                <p>Size: <Rating value={newHouse.ratings.size}/></p>
                <p>Location: <Rating value={newHouse.ratings.location}/></p>
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


LocationItem.defaultProps = {
    newHouse: []
  };

export default LocationItem;
