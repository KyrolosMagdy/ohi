import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./bookGallery.styles.css";

class BookGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flip: false
    };
  }

  flipCard = () => {
    const currentFlipState = this.state.flip;
    this.setState({ flip: !currentFlipState });
  };

  render() {
    const { bookDetails } = this.props;
    return (
      <div
        className={`book-gallery__wrapper  cardContainer individual-project-container ${
          this.state.flip ? " cardFlipped" : ""
        }`}
        style={{
          backgroundImage:
            this.state.flip === false ? `url(${bookDetails.img})` : ""
        }}
        onMouseEnter={this.flipCard}
        onMouseLeave={this.flipCard}
        onClick={this.flipCard}
        key=""
      >
        <header className="box">
          <p className="book-title">
            <Link to={`/books/${bookDetails.title}`}>{bookDetails.title}</Link>
          </p>
        </header>
        <div
          className={`card__side front-card card__side--front${
            this.state.flip ? "cardFlipped" : ""
          }`}
        >
          <div
            className={`card-content is-centered is-paddingless card__side card__side--back ${
              this.state.flip ? " cardBack cardFlipped" : " back"
            }`}
          >
            <div className="book-gallery__author">By: {bookDetails.author}</div>
            <div className="book-gallery__description">
              {bookDetails.description}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookGallery;

// import React from "react";
// import { Link } from "react-router-dom";
// import "./bookGallery.styles.css";

// const BookGallery = ({ bookDetails }) => {
//   return (
//     <article className="book">
//       <h1 className="book-title"> {bookDetails.title} </h1>
//       <h2> By: {bookDetails.author} </h2>
//       <h4 className="book-section"> {bookDetails.section} </h4>
//       <img src={bookDetails.img} alt="book" className="book-gallery__image" />
//       <p> {bookDetails.description}</p>
//       <Link to={`/books/${bookDetails.title}`}>
//         <small className="more-button">More</small>
//       </Link>
//       {bookDetails.available ? (
//         <Link to={`/books/${bookDetails.title}`}>
//           <button className="order-book__specific"> Book that book </button>
//         </Link>
//       ) : (
//         <div>
//           <small className="book-badge"> Not Available </small>
//           <button className="order-book__specific not-clickable">
//             {" "}
//             Book that book{" "}
//           </button>
//         </div>
//       )}
//     </article>
//   );
// };

// export default BookGallery;
