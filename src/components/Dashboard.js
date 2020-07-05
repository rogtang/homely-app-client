import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import LocationItem from "./LocationItem";
import Rating from "./Rating";

class Dashboard extends Component {
  render() {
    const {newHouse} = this.props
    return (
      <div>
        <main role="main">
      <header className="dashboard-header">
        <h1>Homely Posts</h1>
      </header>
      <section>
        <div>
            <h2><Link to='/posts/1'>{newHouse.name}</Link></h2>
            <p>{newHouse.address}</p>
            <p>Price: <Rating value={newHouse.ratings.price}/></p>
            <p>Size: <Rating value={newHouse.ratings.size}/></p>
            <p>Location: <Rating value={newHouse.ratings.location}/></p>
        </div>
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