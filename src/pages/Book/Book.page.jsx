import React from "react";
import Intro from "../../components/intro/intro-component";
import AddingBook from "../../components/addingBook/addingForm.component";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./book.styles.css";

const SingleBook = ({ match, books, isToggleOpen }) => {
  let currentId = match.params.bookId;
  return (
    <div className="single-book__container">
      {isToggleOpen ? <AddingBook /> : null}
      <Intro GreatingMessage={currentId} />
      <article className="single-book__article">
        {books.map(book => {
          return book.title === currentId ? (
            <div>
              <h1 className="book-title"> {book.title} </h1>
              <h2> By: {book.author} </h2>
              <h4 className="book-section"> {book.section} </h4>
              <img
                alt="book-cover"
                src={book.img}
                className="book-gallery__image"
              />
              <p className="single-book__description"> {book.description} </p>
              {book.available ? (
                <Link to={`booking/${book.title}`}>
                  <button className="order-book__specific">
                    {" "}
                    Book that book{" "}
                  </button>
                </Link>
              ) : (
                <div>
                  <small className="book-badge"> Not Available </small>
                  <button className="order-book__specific not-clickable">
                    {" "}
                    Book that book{" "}
                  </button>
                </div>
              )}
            </div>
          ) : (
            console.log("book Not found")
          );
        })}
      </article>
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books.books,
  isToggleOpen: state.books.isToggleOpen
});

export default connect(mapStateToProps)(SingleBook);
