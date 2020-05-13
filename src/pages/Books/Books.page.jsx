import React from "react";
import Intro from "../../components/intro/intro-component";
import "./Books.styles.css";

const BooksPage = () => (
  <div className="bookspage__container">
    <Intro GreatingMessage={"Books"} />
    <h1> Here we are supposed to get all the Books we have</h1>
  </div>
);

export default BooksPage;
