import React from "react";
import Intro from "../../components/intro/intro-component";
import BookGallery from "../../containers/booksGallery/booksGallery.container";
import { connect } from "react-redux";
import AddingBook from "../../components/addingBook/addingForm.component";
import "./Books.styles.css";

const BooksPage = ({ isToggleOpen }) => (
  <div className="bookspage__container">
    {isToggleOpen ? <AddingBook /> : null}
    <Intro GreatingMessage={"Books"} />
    <div className="bookspage__bockgallery-wrapper">
      <BookGallery />
    </div>
  </div>
);

const mapStateToProps = state => ({
  isToggleOpen: state.books.isToggleOpen
});

export default connect(mapStateToProps)(BooksPage);
