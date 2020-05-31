import { combineReducers } from "redux";

import booksReducer from "./books/books.reducer";
import mobileNavReducer from "./nav/nav.reducers";

export default combineReducers({
  books: booksReducer,
  nav: mobileNavReducer
});
