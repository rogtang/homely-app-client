import React, { Component } from "react";
import "./EditPost.css";

class EditPost extends Component {
  render() {
    const {newHouse} = this.props
    return (
      <div> 
        <main role="main">
      <header>
        <h1>Edit Location Details</h1>
      </header>
      <section>
        <form id="edit-post">
          <div className="form-section">
            <label htmlFor="nickname">Edit nickname:</label>
            <input type="text" name="nickname" value={newHouse.name} required/>
          </div>
          <div className="form-section">
            <label htmlFor="address">Edit Address:</label>
            <input type="text" name="address" value={newHouse.address} required/>
          </div>
          <div className="form-section">
            <label htmlFor="notes">What did you think of the place?</label>
            <textarea name="notes" rows="15" value={newHouse.userNotes}></textarea>
          </div>
          <div className="form-section">
            <label htmlFor="url">Link to listing page (optional):</label>
            <input type="url" name="url" value={newHouse.url}/>
          </div>
          <div className="ratings-container" class="form-section">
            <label htmlFor="price-rating">Price (e.g. how well does this place fit within your budget?):</label>
            <input type="number" name="price-rating" min="1" max="5" value={newHouse.ratings.price} required />
          </div>
          <div className="ratings-container" class="form-section">
            <label htmlFor="size-rating">Size (e.g. # of rooms, garage, backyard):</label>
            <input type="number" name="size-rating" min="1" max="5" value={newHouse.ratings.size} required/>
          </div>
          <div className="ratings-container" class="form-section">
            <label htmlFor="location-rating">Location (e.g. proximity to schools, urban areas):</label>
            <input type="number" name="location-rating" min="1" max="5" value={newHouse.ratings.location} required />
          </div>
          <button type="submit">Submit Changes</button>
          <button type="submit">Cancel</button>
        </form>
      </section>
    </main>
        <footer>(c) 2020</footer>
      </div>
    );
  }
}

export default EditPost;