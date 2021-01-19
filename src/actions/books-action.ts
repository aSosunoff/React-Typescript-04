import { IBook } from "../interfaces/IBook";
import { Dispatch } from 'redux';
import { ActionTypeBooksLoad, ActionTypeBooksRequest, ActionTypeBooksError } from "../reducers/books";

const loadedBooks = (payload: IBook[]): ActionTypeBooksLoad => {
    return {
        type: 'BOOKS_LOAD',
        payload
    }
};

const requestBooks = (): ActionTypeBooksRequest => {
    return {
        type: 'BOOKS_REQUEST',
    }
};

const errorBooks = (payload: string): ActionTypeBooksError => {
    return {
        type: 'BOOKS_ERROR',
        payload
    }
};

export const fetchBooks = (getBook: () => Promise<IBook[]>, dispatch: Dispatch) => () => {
    dispatch(requestBooks());

    getBook()
        .then((date) => dispatch(loadedBooks(date)))
        .catch((er) => dispatch(errorBooks(er.message)));
};