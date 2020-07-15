import React, { Component } from "react";
import "./EditPost.css";
import PostsContext from '../contexts/PostsContext';
import config from '../config';
import TokenService from '../services/token-service';

class EditPost extends Component {
  static contextType = PostsContext;

  state = {
    error: null,
    id: '',
    name: '',
    url: '',
    address: '',
    usernotes: '',
    price_rating: 1,
    size_rating: 1,
    location_rating: 1,
  };

  componentDidMount() {
    const { post_id } = this.props.match.params
    fetch(config.API_ENDPOINT + `/posts/${post_id}`, {
        method: 'GET',
        headers: {
          'authorization': `bearer ${TokenService.getAuthToken()}`,
        }
    })
    .then(res => {
        if (!res.ok)
            return res.json().then(error => Promise.reject(error))
            return res.json()
    })
    .then(responseData => {
        this.setState({
            id: responseData.id,
            name: responseData.name,
            address: responseData.address,
            url: responseData.url,
            usernotes: responseData.usernotes,
            price_rating: Number(responseData.price_rating),
            size_rating: Number(responseData.size_rating),
            location_rating: Number(responseData.location_rating),
        })
    })
    .catch(error => {
        console.error(error)
        this.setState({error})
    })
  }

  handleChangeName = e => {
    this.setState({ name: e.target.value })
  };

  handleChangeUrl = e => {
    this.setState({ url: e.target.value })
  };

  handleChangeAddress = e => {
    this.setState({ address: e.target.value })
  };

  handleChangeUsernotes = e => {
    this.setState({ usernotes: e.target.value })
  };

  handleChangePriceRating = e => {
    this.setState({ price_rating: Number(e.target.value) })
  };

  handleChangeSizeRating = e => {
    this.setState({ size_rating: Number(e.target.value) })
  };

  handleChangeLocationRating = e => {
    this.setState({ location_rating: Number(e.target.value) })
  };

  handleSubmit = (e) => {
    e.preventDefault()
    const { post_id } = this.props.match.params
    //this.state was updated by above handler functions
    const { id, name, address, url, usernotes, price_rating, size_rating, location_rating } = this.state
    const newPost = { id, name, address, url, usernotes, price_rating, size_rating, location_rating }
    fetch(config.API_ENDPOINT + `/posts/${post_id}`, {
        method: 'PATCH',
        body: JSON.stringify(newPost),
        headers: {
          'content-type': 'application/json',
          'authorization': `bearer ${TokenService.getAuthToken()}`,
        },
      })
      .then(res => {
        if (!res.ok)
          return res.json().then(error => Promise.reject(error))
      })
      .then((res) => {
          this.resetFields(newPost)
          this.context.updatePost(newPost)
          this.props.history.push('/posts')
      })
      .catch(error => {
          console.error(error)
          this.setState({error})
      })
  }

  resetFields = (newFields) => {
    this.setState({
      id: newFields.id || '',
      name: newFields.name || '',
      address: newFields.address || '',
      url: newFields.url || '',
      usernotes: newFields.usernotes || '',
      price_rating: Number(newFields.price_rating) || '',
      size_rating: Number(newFields.size_rating) || '',
      location_rating: Number(newFields.location_rating) || '',
    })
  }

  handleClickCancel = () => {
      this.props.history.push('/posts')
  }

  render() {
    const {name, address, url, usernotes, price_rating, size_rating, location_rating, error} = this.state
    return (
      <div> 
        <main role="main">
      <header>
        <h1 className='edit-location-header'>Edit Location Details</h1>
      </header>
      <section className="edit-post-section">
        <form id="edit-post" onSubmit={this.handleSubmit}>
        <div className='EditPost__error' role='alert'>
            {error && <p>{error.message}</p>}
          </div>
          <input
            type='hidden'
            name='id'
          />
          <div className="form-section">
            <label htmlFor="name">Edit nickname:</label>
            <input type="text" name="name" id="name" value={name} onChange={this.handleChangeName} required/>
          </div>
          <div className="form-section">
            <label htmlFor="address">Edit Address:</label>
            <input id="address" type="text" name="address" value={address} onChange={this.handleChangeAddress} required/>
          </div>
          <div className="form-section">
            <label htmlFor="usernotes">What did you think of the place?</label>
            <textarea id="usernotes" name="usernotes" rows="15" placeholder="Notes go here..." value={usernotes || ''} onChange={this.handleChangeUsernotes}></textarea>
          </div>
          <div className="form-section">
            <label htmlFor="url">Link to listing page (optional):</label>
            <input id="url" type="url" name="url" placeholder="https://www.great-website.com/" value={url || ''} onChange={this.handleChangeUrl}/>
          </div>
          <div><strong>Add a rating between 1 - 5:</strong></div><br/>
          <div className="ratings-container form-section">
            <label htmlFor="price_rating">Price (e.g. how well does this place fit within your budget?):</label>
            <input id="price_rating" type="number" name="price_rating" min="1" max="5" value={price_rating} onChange={this.handleChangePriceRating}required />
          </div>
          <div className="ratings-container form-section">
            <label htmlFor="size_rating">Size (e.g. # of rooms, garage, backyard):</label>
            <input id="size_rating" type="number" name="size_rating" min="1" max="5" value={size_rating} onChange={this.handleChangeSizeRating} required/>
          </div>
          <div className="ratings-container form-section">
            <label htmlFor="location_rating">Location (e.g. proximity to schools, urban areas):</label>
            <input id="location_rating" type="number" name="location_rating" min="1" max="5" value={location_rating} onChange={this.handleChangeLocationRating} required />
          </div>
          <button type="submit">Submit Changes</button>
          <button type="button" onClick={this.handleClickCancel}>Cancel</button>
        </form>
      </section>
    </main>
      </div>
    );
  }
}

export default EditPost;