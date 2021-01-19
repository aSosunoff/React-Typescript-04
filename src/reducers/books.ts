import { IBook } from "../interfaces/IBook";
import { IBooksInitialState } from "../interfaces/IBooksInitialState";
import { Action } from "./helpers";

const initialState: IBooksInitialState = {
    loading: true,
    list: [],
}

export type ActionTypeBooksLoad = Action<'BOOKS_LOAD', { payload: IBook[] }>
export type ActionTypeBooksRequest = Action<'BOOKS_REQUEST'>

export type BooksActionType =
    | ActionTypeBooksLoad
    | ActionTypeBooksRequest;

const reducer = (state: IBooksInitialState = initialState, action: BooksActionType) => {
    switch (action.type) {
        case 'BOOKS_LOAD':
            return ({
                ...state,
                loading: false,
                list: action.payload,
            });
        case 'BOOKS_REQUEST':
            return ({
                ...state,
                loading: true
            });
        default: return state;
    }
}

export default reducer 