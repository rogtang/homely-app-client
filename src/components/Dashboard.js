import React, { Component } from "react";
import "./Dashboard.css";
import LocationItem from "./LocationItem"

class Dashboard extends Component {
  render() {
    const {newHouse} = this.props
    return (
      <div>
        <main role="main">
      <header role="banner">
        <h1>Homely Posts</h1>
      </header>
      <section>
        <header>
            <h2>{newHouse.name}</h2>
            <p>{newHouse.address}</p>
            <p>Price: {newHouse.ratings.price}</p>
            <p>Size: {newHouse.ratings.size}</p>
            <p>Location: {newHouse.ratings.location}</p>
        </header>
        <p>Lovely exteriors, spatial front yard, but kitchens need renovation. Plenty of natural light. Spacious living areas but air conditioning will need to be replaced. Cabinets are outdated. Furniture will not be included.</p>
        <a href={newHouse.url} target="_blank" rel="noopener noreferrer"> Link</a>
        <br/>
        <button>Edit</button>
        <button>Delete</button>
      </section>
      <section>
        <header>
            <h2>The Palace in Auburn Hills</h2>
            <p>6 Championship Dr, Auburn Hills, MI 48326</p>
        </header>
      </section>
      <section>
        <header>
            <h2>White Picket Fence</h2>
            <p>111 American Dream Lane, South Pasadena, CA 91030</p>
        </header>
      </section>
    </main>
        <footer>(c) 2020</footer>
      </div>
    );
  }
}

export default Dashboard;