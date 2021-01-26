import { IBook } from "../../interfaces/IBook";
import { Dispatch } from "redux";
import {
  ActionType_Books_Success,
  ActionType_Books_Request,
  ActionType_Books_Error,
} from "../types";

const loadedBooks = (payload: IBook[]): ActionType_Books_Success => {
  return {
    type: "BOOKS_SUCCESS",
    payload,
  };
};

const requestBooks = (): ActionType_Books_Request => {
  return {
    type: "BOOKS_REQUEST",
  };
};

const errorBooks = (payload: string): ActionType_Books_Error => {
  return {
    type: "BOOKS_FAILURE",
    payload,
  };
};

export const fetchBooks = (getBook: () => Promise<IBook[]>, dispatch: Dispatch) => () => {
  dispatch(requestBooks());

  getBook()
    .then((date) => dispatch(loadedBooks(date)))
    .catch((er) => dispatch(errorBooks(er.message)));
};
