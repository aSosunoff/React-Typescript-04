import { combineReducers } from "redux";
import { IBooksInitialState } from "../interfaces/IBooksInitialState";
import booksReducer from "./books";

interface ICombineReducers {
    books: IBooksInitialState
}

export default combineReducers<ICombineReducers>({
    books: booksReducer
});
