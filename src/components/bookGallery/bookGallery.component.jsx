import React from "react";
import "./bookGallery.styles.css";

const BookGallery = ({ bookDetails }) => {
  return (
    <article className="book">
      <h1 className="book-title"> {bookDetails.title} </h1>
      <h2> By: {bookDetails.author} </h2>
      <h4 className="book-section"> {bookDetails.section} </h4>
      <img alt="book-cover" src={bookDetails.img} className="book-image" />
      <p> {bookDetails.description} </p>
      <button className="order-book__specific"> Book that book </button>
    </article>
  );
};

export default BookGallery;
