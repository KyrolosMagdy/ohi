import React from "react";
import library from "../../assets/Library.jpg";
import "./intro-styles.css";

const Messages = { "/": "Home Page", "/books": "Books, Have fun" };

const Intro = ({ GreatingMessage }) => {
  return (
    <div className="intro-container">
      <h1> {GreatingMessage}</h1>
      <img src={library} className="intro__image" />
    </div>
  );
};

export default Intro;
