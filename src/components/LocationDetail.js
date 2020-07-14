import React, { Component } from "react";
import PostsContext from "../contexts/PostsContext";
import { findPost } from "../App";
import LocationItem from "./LocationItem";
import { withRouter } from "react-router";
import './LocationDetail.css'

class LocationDetail extends Component {
  static contextType = PostsContext;

  static defaultProps = {
    match: {
      params: {},
    },
  };

  handleClickCancel = () => {
    this.props.history.push('/posts')
  }

  render() {
    const { posts } = this.context;
    const { post_id } = this.props.match.params;
    const post = findPost(posts, parseInt(post_id)) || { content: "" };
    return (
      <section className="postDetail">
        <LocationItem key={post_id} {...post} />
              <button type="button" onClick={this.handleClickCancel}>Cancel</button>
              
      </section>
    );
  }
}

export default withRouter(LocationDetail);
