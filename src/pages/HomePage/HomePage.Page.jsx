import React from "react";
import BooksGallery from "../../containers/booksGallery/booksGallery.container";
import ManagmentTeam from "../../components/managmentTeam/managment-team.component";
import Intro from "../../components/intro/intro-component";

import { connect } from "react-redux";

import "./HomePage.styles.css";
import AddingBook from "../../components/addingBook/addingForm.component";

const HomePage = ({ history, isToggleOpen }) => {
  return (
    <div className={`homepage-container`}>
      {isToggleOpen ? <AddingBook /> : null}
      <Intro GreatingMessage={"Home Page"} />
      <h1
        className="books-main__section"
        onClick={() => history.push("/books")}
      >
        Books
      </h1>
      <div className="bookgallery-link">
        <BooksGallery />
      </div>
      <ManagmentTeam />
    </div>
  );
};

const mapStateToProps = state => ({
  isToggleOpen: state.books.isToggleOpen
});

export default connect(mapStateToProps)(HomePage);
