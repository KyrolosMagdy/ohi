import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.Page";
import BooksPage from "./pages/Books/Books.page";
import SingleBook from "./pages/Book/Book.page";
import NavBar from "./components/navBar/navBar.component";
import Footer from "./components/footer/footer.component";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route component={HomePage} path="/" exact />
        <Route component={SingleBook} path="/books/:bookId" />
        <Route component={BooksPage} path="/books" exact />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
