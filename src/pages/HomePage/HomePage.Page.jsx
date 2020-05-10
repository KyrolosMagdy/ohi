import React from "react";
import BooksGallery from "../../containers/booksGallery/booksGallery.container";
import ManagmentTeam from "../../components/managmentTeam/managment-team.component";
import "./HomePage.styles.css";

const HomePage = ({ books, history }) => {
  return (
    <div>
      <h1
        className="books-main__section"
        onClick={() => history.push("/books")}
      >
        {" "}
        Books{" "}
      </h1>
      <BooksGallery books={books} />
      <ManagmentTeam />
    </div>
  );
};

export default HomePage;
