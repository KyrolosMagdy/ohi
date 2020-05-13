import React from "react";
import { Link } from "react-router-dom";
import "./footer.styles.css";

const Footer = () => (
  <footer className="main-footer">
    <nav>
      <ul className="main-footer__links">
        <li className="main-footer__link">
          <Link to="/"> Support </Link>
        </li>
        <li className="main-footer__link">
          <Link to="/">Terms Of Use</Link>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
