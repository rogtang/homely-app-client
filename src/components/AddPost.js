import React, { Component } from "react";
import PostsContext from '../contexts/PostsContext';
import PostApiService from '../services/post-api-service';
import "./AddPost.css";

class AddPost extends Component {
  static contextType = PostsContext;

  static defaultProps = {
    onAddPost: () => { }
};

handleSubmit = e => {
  e.preventDefault()
  const {name, url, address, usernotes, price_rating, size_rating, location_rating} = e.target
  const post = {
      name: name.value,
      url: url.value,
      address: address.value,
      usernotes: usernotes.value,
      price_rating: Number(price_rating.value),
      size_rating: Number(size_rating.value),
      location_rating: Number(location_rating.value)
  }

 PostApiService.postPost(post.name, post.url, post.address, post.usernotes, post.price_rating, post.size_rating, post.location_rating)
    .then(data => {
      name.value = ''
      url.value = ''
      address.value = ''
      usernotes.value = ''
      price_rating.value = ''
      size_rating.value = ''
      location_rating.value = ''
      this.context.addPost(data)
      this.props.history.push('/posts')
})
.catch(error => {
  this.setState({ error })
})
}

handleClickCancel = () => {
  this.props.history.push('/posts')
};

  render() {
    return (
      <div>
        <main role="main">
      <header className="add-post-header">
        <h1>Add Location</h1>
      </header>
      <section className="add-post-section">
        <form id="add-post" className='add-post-form' onSubmit={this.handleSubmit}>
          <div className="form-section">
            <label htmlFor="name">Add a nickname to help you remember this place:</label>
            <input id="name" type="text" name="name" placeholder="The White House" required/>
          </div>
          <div className="form-section">
            <label htmlFor="address">Address:</label>
            <input id="address" type="text" name="address" placeholder="1600 Pennsylvania Ave NW, Washington DC, 20500" required/>
          </div>
          <div className="form-section">
            <label htmlFor="usernotes">What did you think of the place?</label>
            <textarea id="usernotes" name="usernotes" rows="15"></textarea>
          </div>
          <div className="form-section">
            <label htmlFor="url">Link to listing page (optional):</label>
            <input id="url" type="url" name="url" placeholder="https://zillow.com/homes"/>
          </div>
          <div className="ratings-container form-section">
            <label htmlFor="price_rating">Price (e.g. how well does this place fit within your budget?):</label>
            <input id="price_rating" type="number" name="price_rating" min="1" max="5" placeholder="1" required />
          </div>
          <div className="ratings-container form-section">
            <label htmlFor="size_rating">Size (e.g. # of rooms, garage, backyard):</label>
            <input id="size_rating" type="number" name="size_rating" min="1" max="5" placeholder="1" required/>
          </div>
          <div className="ratings-container form-section">
            <label htmlFor="location_rating">Location (e.g. proximity to schools, urban areas):</label>
            <input id="location_rating" type="number" name="location_rating" min="1" max="5" placeholder="1" required />
          </div>
          <button type="submit">Add location</button>
          <button type="button" onClick={this.handleClickCancel}>Cancel</button>
        </form>
      </section>
    </main>
      </div>
    );
  }
}

export default AddPost;