import React from "react";
import library from "../../assets/Library.jpg";
import "./intro-styles.css";

const Intro = ({ GreatingMessage }) => {
  return (
    <div className="intro-container">
      <img src={library} className="intro__image" alt="library" />
      <h1 className="intro__greating-messsage"> {GreatingMessage} </h1>
    </div>
  );
};

export default Intro;
