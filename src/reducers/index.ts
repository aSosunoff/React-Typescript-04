import { combineReducers } from "redux";
import booksReducer from "./booksReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    books: booksReducer,
    cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
