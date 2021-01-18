import { IBook } from "../interfaces/IBook";
import { BooksLoadActionType } from "../reducers/books";
import { BooksType } from "../reducers/types/books-type";

export const load = (payload: IBook[]): BooksLoadActionType => {
    return {
        type: BooksType.BOOKS_LOAD,
        payload
    }
};