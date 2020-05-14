import React from "react";
import Intro from "../../components/intro/intro-component";
import BookGallery from "../../containers/booksGallery/booksGallery.container";
import "./Books.styles.css";

const BooksPage = ({ books }) => (
  <div className="bookspage__container">
    <Intro GreatingMessage={"Books"} />
    <div className="bookspage__bockgallery-wrapper">
      <BookGallery books={books} />
    </div>
  </div>
);

export default BooksPage;
