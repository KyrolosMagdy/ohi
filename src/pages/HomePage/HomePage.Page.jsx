import React from "react";
import BooksGallery from "../../containers/booksGallery/booksGallery.container";
import ManagmentTeam from "../../components/managmentTeam/managment-team.component";
import Intro from "../../components/intro/intro-component";
import "./HomePage.styles.css";

const HomePage = ({ books, history }) => {
  return (
    <div className="homepage-container">
      <Intro />
      <h1
        className="books-main__section"
        onClick={() => history.push("/books")}
      >
        Books
      </h1>
      <div className="bookgallery-link">
        <BooksGallery books={books} />
      </div>

      <ManagmentTeam />
    </div>
  );
};

export default HomePage;
