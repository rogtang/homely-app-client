import React, { Component } from "react";
import "./LocationItem.css";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import PostsContext from '../contexts/PostsContext';
import PostApiService from '../services/post-api-service';
import { withRouter } from "react-router";


class LocationItem extends Component {
  static contextType = PostsContext;

  static defaultProps = {
    onDeletePost: () => { },
    posts: []
};

  postToDelete = (postId) => {
    const newPosts = this.state.posts.filter((post) => {
      return parseInt(post.id) !== parseInt(postId)
    });
    this.setState({
        posts: newPosts
    });
    window.location.assign('/posts')
};

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
  //const postId = Number(id)
  PostApiService.deletePost(id, this.postToDelete(id))
}


  render() {
    const { name, id, url, address, usernotes, price_rating, size_rating, location_rating } = this.props

    return (
      <div className="location-container-detail">
          <header className="location-item-header">
            <h2 className="location-item-name"><Link to={`/posts/${id}`}> {name}</Link></h2>
          </header>
          <section className="location-item-body">
            <div>
              <div className="location-detail">{address}</div>
              <div className="location-detail">
                {usernotes}
              </div>
              <a 
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {url}
              </a>
              <div className="post-ratings">
                <div>Price: <Rating value={price_rating}/></div>
                <div>Size: <Rating value={size_rating}/></div>
                <div>Location: <Rating value={location_rating}/></div>
              </div>
              <Link to={`/edit/${id}`}>
              <button type="button" id={id}>Edit</button></Link>
              
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

export default withRouter(LocationItem);
