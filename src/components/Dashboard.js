import React, { Component } from "react";
import "./Dashboard.css";
import LocationItem from "./LocationItem";
import PostsContext from '../contexts/PostsContext';

class Dashboard extends Component {
  static contextType = PostsContext;
  static defaultProps = {
    match: {
      params: {}
    },
    posts:[]
  }
  

  render() {
    const { posts=[]} = this.context
//Dashboard only renders post name, address and ratings

    return (
      <section className='postsMain'>
      <div className='hero-image'></div>
      <h1 className="dashboard-heading">Your Posts</h1>
      <ul className='Posts__list' aria-live='polite'>
      {posts.map(post =>
            <LocationItem
            key={post.id}
            id={post.id}
            name={post.name}
            address={post.address}
            price_rating={post.price_rating}
            size_rating={post.size_rating}
            location_rating={post.location_rating}
            />
          )}
      </ul>
      
    </section>

    );
  }
}

export default Dashboard;