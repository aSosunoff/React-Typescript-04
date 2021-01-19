import { IBook } from "../interfaces/IBook";
import { IBooksInitialState } from "../interfaces/IBooksInitialState";
import { Action } from "./helpers";

const initialState: IBooksInitialState = {
    loading: true,
    list: [],
    error: '',
}

export type ActionTypeBooksLoad = Action<'BOOKS_LOAD', { payload: IBook[] }>
export type ActionTypeBooksRequest = Action<'BOOKS_REQUEST'>
export type ActionTypeBooksError = Action<'BOOKS_ERROR', { payload: string }>

export type BooksActionType =
    | ActionTypeBooksLoad
    | ActionTypeBooksRequest
    | ActionTypeBooksError;

function endReducer<T>(state: T, _action: never): T {
    return state;
}

const reducer = (state: IBooksInitialState = initialState, action: BooksActionType) => {
    switch (action.type) {
        case 'BOOKS_LOAD':
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
        case 'BOOKS_ERROR':
            return ({
                ...state,
                loading: false,
                error: action.payload,
                list: [],
            });

        default: return endReducer(state, action);
    }
}

export default reducer 