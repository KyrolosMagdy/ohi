import React from "react";
import BookGallery from "../../components/bookGallery/bookGallery.component";
import { connect } from "react-redux";

import "./booksGallery.styles.css";

const BooksGallery = ({ books }) => {
  return (
    <div className="books-container">
      <div className="background-image"></div>
      {books.length ? (
        books.map(book => {
          return <BookGallery bookDetails={book} key={book.title} />;
        })
      ) : (
        <h1> No Books added yet! </h1>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books.books
});

export default connect(mapStateToProps)(BooksGallery);
