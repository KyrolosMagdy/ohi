import React from "react";
import "./navBar.styles.css";

const NavBar = () => {
  return (
    <header className="main-header">
      <div className="main-nav__brand main-nav__button">OHI</div>
      <nav className="main-nav">
        <ul className="main-nav__items">
          <li className="main-nav__item main-nav__button">Books</li>
          <li className="main-nav__item main-nav__button">Add books</li>
          <li className="main-nav__item main-nav__button">About Us</li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
