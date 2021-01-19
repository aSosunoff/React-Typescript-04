import { IBook } from "../interfaces/IBook";
import { ActionTypeBooksLoad, ActionTypeBooksRequest, ActionTypeBooksError } from "../reducers/books";

export const loadedBooks = (payload: IBook[]): ActionTypeBooksLoad => {
    return {
        type: 'BOOKS_LOAD',
        payload
    }
};

export const requestBooks = (): ActionTypeBooksRequest => {
    return {
        type: 'BOOKS_REQUEST',
    }
};

export const errorBooks = (payload: string): ActionTypeBooksError => {
    return {
        type: 'BOOKS_ERROR',
        payload
    }
};