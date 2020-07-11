import React, { Component } from "react";
import "./Dashboard.css";
import LocationItem from "./LocationItem";
import PostsContext from '../contexts/PostsContext';
import {getPostsFromUsers} from '../App';

class Dashboard extends Component {
  static contextType = PostsContext;
  static defaultProps = {
    match: {
      params: {}
    },
    posts:[]
  }
  

  render() {
    const { user_id } = this.props.match.params
    const { posts=[] } = this.context
    const postsFromUser = getPostsFromUsers(posts, user_id)

    return (
      <section className='PostsMain'>
      <h1>Homely Posts</h1>
      <ul className='Posts__list' aria-live='polite'>
      {posts.map(post =>
            <LocationItem
            key={post.id}
            id={post.id}
            name={post.name}
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