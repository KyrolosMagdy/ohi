import React from "react";
import { Link } from "react-router-dom";
import "./bookGallery.styles.css";

const BookGallery = ({ bookDetails }) => {
  return (
    <Link to={`/books/${bookDetails.title}`}>
      <article
        className="book"
        style={{
          background: `url(${bookDetails.img})`
        }}
      >
        <h1 className="book-title"> {bookDetails.title} </h1>
        <h2> By: {bookDetails.author} </h2>
        <h4 className="book-section"> {bookDetails.section} </h4>
        <p> {bookDetails.description}</p>
        {bookDetails.available ? (
          <button className="order-book__specific"> Book that book </button>
        ) : (
          <div>
            <small className="book-badge"> Not Available </small>
            <button className="order-book__specific not-clickable">
              {" "}
              Book that book{" "}
            </button>
          </div>
        )}
      </article>
    </Link>
  );
};

export default BookGallery;
