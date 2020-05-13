import React from "react";
import Intro from "../../components/intro/intro-component";
import AddingBook from "../../components/addingBook/addingForm.component";
import "./AddBooks.styles.css";

const AddBooks = () => (
  <div>
    <Intro GreatingMessage={"Adding New book"} />
    <AddingBook />
  </div>
);

export default AddBooks;
