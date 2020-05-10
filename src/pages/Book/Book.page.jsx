import React from "react";
import "./book.styles.css";

const SingleBook = props => (
  <div>
    <h1> A Single Book Detail Should appear{props.match.params.bookId} </h1>
  </div>
);

export default SingleBook;
