import React from "react";
import BookGallery from "../../components/bookGallery/bookGallery.component";

const BooksGallery = ({ books }) => {
  return (
    <div className="books-container">
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

export default BooksGallery;
