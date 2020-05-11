import React from "react";
import { Link } from "react-router-dom";
import "./navBar.styles.css";

const NavBar = () => {
  return (
    <header className="main-header">
      <div className="main-nav__brand">
        <Link className="main-nav__link" to="/">
          OHI
        </Link>
      </div>
      <nav className="main-nav">
        <ul className="main-nav__items">
          <li className="main-nav__item " key="1">
            <Link className="main-nav__link" to="/books">
              Books
            </Link>
          </li>
          <li className="main-nav__item " key="2">
            <Link to="/add-books" className="cta">
              Add books
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
