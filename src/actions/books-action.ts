import { IBook } from "../interfaces/IBook";
import { ActionTypeBooksLoad, ActionTypeBooksRequest } from "../reducers/books";

export const load = (payload: IBook[]): ActionTypeBooksLoad => {
    return {
        type: 'BOOKS_LOAD',
        payload
    }
};

export const request = (): ActionTypeBooksRequest => {
    return {
        type: 'BOOKS_REQUEST',
    }
};