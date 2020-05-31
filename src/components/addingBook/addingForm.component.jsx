import React from "react";

import { connect } from "react-redux";
import { setToggleButton } from "../../redux/books/books.actions";

import "./addingForm.styles.css";

const AddingBook = ({ setToggleButton }) => (
  <div className="adding-book__container backdrop">
    <div className="adding-book__wrapper">
      <div className="close-button__adding-book" onClick={setToggleButton}>
        {" "}
        &#10005;{" "}
      </div>
      <h2>Lets change someone's life</h2>
      <span>
        Never trust anyone who has not brought a book with them – Lemony Snicket
      </span>
      <form className="adding-book__form">
        <div className="adding-book__form-content">
          <div>
            <label> Book Title: </label>
            <input
              name="bookTitle"
              type="text"
              label="bookTitle"
              className=""
              required
              placeholder={`Please Enter Book Title`}
            />
          </div>
          <div>
            <label> Author: </label>
            <input
              name="author"
              type="text"
              label="author"
              required
              placeholder={`Please enter author name`}
            />
          </div>
          <div>
            <label> Description: </label>
            <input
              name="desc"
              type="text"
              label="desc"
              required
              placeholder={`Please enter book description`}
            />
          </div>

          <div>
            <label> Book Cover: </label>
            <input
              name="imageUrl"
              type="text"
              label="imageUrl"
              required
              placeholder={`Please enter book's cover URL`}
            />
          </div>

          <div>
            <button type="submit" className="adding-book__button">
              {" "}
              Add Book{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  setToggleButton: () => dispatch(setToggleButton())
});

export default connect(null, mapDispatchToProps)(AddingBook);
