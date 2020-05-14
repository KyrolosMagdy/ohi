import React from "react";
import "./addingForm.styles.css";

const AddingBooks = () => (
  <div className='adding-book__container'>
    <h2>Lets change someone's life</h2>
    <span>
      Never trust anyone who has not brought a book with them – Lemony Snicket
    </span>
    <form className='adding-book__form'>
      <input name="userName" type="text" label="userName" required placeholder={`Please Enter student's name`}/>
      <input name="userEmail" type="email" label="userEmail" required placeholder={`Please enter student's email`}/>
      <input name="userId" type="text" label="userId" required placeholder={`Please enter student's ID`}/>
      <div>
        <button type="submit" className='adding-book__button'> Add Book </button>
      </div>
    </form>
  </div>
);

export default AddingBooks;
