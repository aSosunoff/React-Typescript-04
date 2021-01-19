import { IBook } from "../interfaces/IBook";
import { IBooksInitialState } from "../interfaces/IBooksInitialState";
import { Action } from "./helpers";

const initialState: IBooksInitialState = {
    loading: true,
    list: [],
    error: '',
}

export type ActionTypeBooksLoad = Action<'BOOKS_SUCCESS', { payload: IBook[] }>
export type ActionTypeBooksRequest = Action<'BOOKS_REQUEST'>
export type ActionTypeBooksError = Action<'BOOKS_FAILURE', { payload: string }>

export type BooksActionType =
    | ActionTypeBooksLoad
    | ActionTypeBooksRequest
    | ActionTypeBooksError;

const reducer = (state: IBooksInitialState = initialState, action: BooksActionType) => {
    switch (action.type) {
        case 'BOOKS_SUCCESS':
            return ({
                ...state,
                loading: false,
                error: '',
                list: action.payload,
            });
        case 'BOOKS_REQUEST':
            return ({
                ...state,
                error: '',
                loading: true
            });
        case 'BOOKS_FAILURE':
            return ({
                ...state,
                loading: false,
                error: action.payload,
                list: [],
            });

        default: return state;
    }
}

export default reducer 