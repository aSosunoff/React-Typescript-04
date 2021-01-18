import { combineReducers } from "redux";
import booksReducer from "./books";

const rootReducer = combineReducers({
    books: booksReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
