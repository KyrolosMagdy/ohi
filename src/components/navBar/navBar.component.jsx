import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./navBar.styles.css";

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      isToggleOpen: false
    };
  }

  handleToggleButton = () => {
    const currentState = this.state.isToggleOpen;
    this.setState({ isToggleOpen: !currentState });
  };

  render() {
    return (
      <header className="main-header">
        <div className="main-nav__brand">
          <button
            className="toggle-button"
            onClick={() => this.handleToggleButton()}
          >
            <span className="toggle-button__bar"></span>
            <span className="toggle-button__bar"></span>
            <span className="toggle-button__bar"></span>
          </button>
          <Link to="/" className="main-header__brand">
            <img alt="logo" src={logo} />
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
              <Link to="/add-book" className="cta">
                Add books
              </Link>
            </li>
          </ul>
        </nav>
        <nav
          className={`mobile-nav ${this.state.isToggleOpen ? "open" : null}`}
        >
          <div
            className="close-button"
            onClick={() => this.handleToggleButton()}
          >
            {" "}
            &#10005;{" "}
          </div>
          <ul className="mobile-nav__items">
            <li className="mobile-nav__item">
              <Link to="/books">Books</Link>
            </li>
            <li className="mobile-nav__item mobile-nav__item--cta">
              <Link to="/add-books">Add books</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default NavBar;
