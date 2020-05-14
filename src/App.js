import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.Page";
import BooksPage from "./pages/Books/Books.page";
import SingleBook from "./pages/Book/Book.page";
import AddBook from "./pages/AddBooks/AddBooks.page";

import NavBar from "./components/navBar/navBar.component";
import Footer from "./components/footer/footer.component";
import "./App.css";

const books = [
  {
    title: "Project Managment",
    author: "Dr: Ahmed",
    section: "civil",
    available: true,
    img:
      "https://egyptinnovate.com/sites/default/files/styles/details_page_image_width_654/public/Project-Management.jpg?itok=SIynbALN",
    description: "amazing topic"
  },
  {
    title: "Amazing Book and super",
    author: "me",
    available: true,
    section: "civil",
    img:
      "https://assets.entrepreneur.com/content/3x2/2000/20191219170611-GettyImages-1152794789.jpeg",
    description: "amazing topic"
  },
  {
    title: "Amazing Book 2",
    author: "me",
    available: true,
    section: "civil",
    img:
      "https://assets.entrepreneur.com/content/3x2/2000/20191219170611-GettyImages-1152794789.jpeg",
    description: "amazing topic"
  },
  {
    title: "Amazing Book 3",
    author: "me",
    section: "civil",
    available: true,
    img:
      "https://assets.entrepreneur.com/content/3x2/2000/20191219170611-GettyImages-1152794789.jpeg",
    description: "amazing topic"
  }
];

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route
          render={props => <HomePage {...props} books={books} />}
          path="/"
          exact
        />
        <Route component={AddBook} path="/add-book" exact />
        <Route
          render={props => <SingleBook {...props} books={books} />}
          path="/books/:bookId"
        />
        <Route
          render={props => <BooksPage {...props} books={books} />}
          path="/books"
          exact
        />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
