import React from "react";
import "./addingForm.styles.css";

const AddingBooks = () => (
  <div className="sign-in">
    <h2>Lets change someone's life</h2>
    <span>
      Never trust anyone who has not brought a book with them – Lemony Snicket
    </span>
    <form>
      <input name="email" type="email" label="email" required />
      <input name="password" type="password" label="password" required />
      <div className="buttons">
        <button type="submit"> Sign in </button>
        <button>Sign in with Google</button>
      </div>
    </form>
  </div>
);

export default AddingBooks;
