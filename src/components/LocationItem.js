import React, { Component } from "react";
import "./LocationItem.css";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import PostsContext from '../contexts/PostsContext';
import config from '../config';
import TokenService from '../services/token-service';
import PostApiService from '../services/post-api-service';


class LocationItem extends Component {
  static contextType = PostsContext;

  static defaultProps = {
    onDeletePost: () => { },
    posts: []
};

  postToDelete = postId => {
    const newPosts = this.state.posts.filter(post =>
        post.id !== postId
    )
    this.setState({
        posts: newPosts
    })
}

componentDidMount() {
  PostApiService.getPosts()
      .then(resJson =>
          this.setState({
              posts: resJson
          }))
}

handleDelete = e => {
  e.preventDefault()
  const { id } = e.target
  const postId = Number(id)
  PostApiService.deletePost(postId, this.postToDelete(postId))
    window.location.assign('/posts');
}

handleClickCancel = () => {
  this.props.history.push('/posts')
}

  render() {
    const { name, id, url, address, usernotes, price_rating, size_rating, location_rating } = this.props

    return (
      <div className="location-detail">
          <header className="location-item-header">
            <h1><Link to={`/posts/${id}`}> {name}</Link></h1>
          </header>
          <section>
            <div >
              <div>{address}</div>
              <div>
                {usernotes}
              </div>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
              <div className="post-ratings">
                <div>Price: <Rating value={price_rating}/></div>
                <div>Size: <Rating value={size_rating}/></div>
                <div>Location: <Rating value={location_rating}/></div>
              </div>
              <Link to={`/edit/${id}`}>
              <button type="button" id={id}>Edit</button></Link>
              <button type="button" onClick={this.handleClickCancel}>Cancel</button>
              <button id={id} type="button" onClick={this.handleDelete}>Delete</button>
            </div>
          </section>
      </div>
    );
  }
}


LocationItem.defaultProps = {
    newHouse: []
  };

export default LocationItem;
