import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

import { connect } from "react-redux";
import { toggleNavHidden } from "../../redux/nav/nav.actions";
import { setToggleButton } from "../../redux/books/books.actions";

import "./navBar.styles.css";

const NavBar = ({ toggleNavHidden, hidden, setToggleButton }) => {
  return (
    <header className={`main-header`}>
      <span className="main-nav__brand">
        <button className="toggle-button" onClick={toggleNavHidden}>
          <span className="toggle-button__bar"></span>
          <span className="toggle-button__bar"></span>
          <span className="toggle-button__bar"></span>
        </button>
        <Link to="/" className="main-header__brand">
          <img alt="logo" src={logo} />
        </Link>
      </span>
      <nav className="main-nav">
        <ul className="main-nav__items">
          <li className="main-nav__item " key="1">
            <Link className="main-nav__link" to="/books">
              Books
            </Link>
          </li>
          <li className="main-nav__item " key="2">
            <button to="/add-book" className="cta" onClick={setToggleButton}>
              Add books
            </button>
          </li>
        </ul>
      </nav>
      <div
        className={`${hidden ? null : "backdrop"}`}
        onClick={toggleNavHidden}
      ></div>
      <nav className={`mobile-nav  ${hidden ? null : "open"}`}>
        <div className="close-button" onClick={toggleNavHidden}>
          {" "}
          &#10005;{" "}
        </div>
        <ul className="mobile-nav__items">
          <li className="mobile-nav__item mobile-nav__item--cta">
            {" "}
            <button
              className="mobile-nav__cta-button"
              onClick={() => {
                toggleNavHidden();
                setToggleButton();
              }}
            >
              Add books
            </button>{" "}
          </li>
          <li className="mobile-nav__item">
            <Link to="/">
              <button onClick={toggleNavHidden}>Home Page</button>
            </Link>
          </li>
          <li className="mobile-nav__item">
            <Link to="/books">
              <button onClick={toggleNavHidden}>Books</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleNavHidden: () => dispatch(toggleNavHidden()),
  setToggleButton: () => dispatch(setToggleButton())
});

const mapStateToProps = state => ({
  hidden: state.nav.hidden
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
