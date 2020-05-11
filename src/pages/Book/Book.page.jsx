import React from "react";
import "./book.styles.css";

const SingleBook = ({ match, books }) => {
  let currentId = match.params.bookId;
  return (
    <article className="book">
      {books.map(book => {
        return book.title === currentId ? (
          <div>
            <h1 className="book-title"> {book.title} </h1>
            <h2> By: {book.author} </h2>
            <h4 className="book-section"> {book.section} </h4>
            <img alt="book-cover" src={book.img} className="book-image" />
            <p> {book.description} </p>
            <button className="order-book__specific"> Book that book </button>
          </div>
        ) : (
          console.log("book Not found")
        );
      })}
    </article>
  );
};

export default SingleBook;
