import { combineReducers } from "redux";
import booksReducer from "./booksReducer";
import cartReducer from "./cartReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
  books: booksReducer,
  cart: cartReducer,
  post: postReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
