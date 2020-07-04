import React, { Component } from "react";
import "./AddPost.css";

class AddPost extends Component {
  render() {
    return (
      <div>
        <main role="main">
      <header>
        <h1>New Location</h1>
      </header>
      <section>
        <form id="add-post">
          <div className="form-section">
            <label htmlFor="nickname">Add a nickname to help you remember this place:</label>
            <input type="text" name="nickname" placeholder="The White House" required/>
          </div>
          <div className="form-section">
            <label htmlFor="address">Address:</label>
            <input type="text" name="address" placeholder="1600 Pennsylvania Ave NW, Washington DC, 20500" required/>
          </div>
          <div className="form-section">
            <label htmlFor="notes">What did you think of the place?</label>
            <textarea name="notes" rows="15"></textarea>
          </div>
          <div className="form-section">
            <label htmlFor="url">Link to listing page (optional):</label>
            <input type="url" name="url" placeholder="https://zillow.com/homes"/>
          </div>
          <div className="ratings-container" class="form-section">
            <label htmlFor="price-rating">Price (e.g. how well does this place fit within your budget?):</label>
            <input type="number" name="price-rating" min="1" max="5" placeholder="1" required />
          </div>
          <div className="ratings-container" class="form-section">
            <label htmlFor="size-rating">Size (e.g. # of rooms, garage, backyard):</label>
            <input type="number" name="size-rating" min="1" max="5" placeholder="1" required/>
          </div>
          <div className="ratings-container" class="form-section">
            <label htmlFor="location-rating">Location (e.g. proximity to schools, urban areas):</label>
            <input type="number" name="location-rating" min="1" max="5" placeholder="1" required />
          </div>
          <button type="submit">Add location</button>
          <button type="submit">Cancel</button>
        </form>
      </section>
    </main>
        <footer>(c) 2020</footer>
      </div>
    );
  }
}

export default AddPost;