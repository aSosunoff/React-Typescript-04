import { IBook } from "../../interfaces/IBook";
import { IBooksInitialState } from "../../interfaces/IBooksInitialState";
import { Action, Handlers, reducer } from "./helpers";

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

const handlers: Handlers<IBooksInitialState, BooksActionType> = {
    BOOKS_SUCCESS: (state, action) => ({
        ...state,
        loading: false,
        error: '',
        list: action.payload,
    }),
    BOOKS_REQUEST: (state) => ({
        ...state,
        error: '',
        loading: true
    }),
    BOOKS_FAILURE: (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
        list: [],
    }),
    'DEFAULT': state => ({ ...state }),
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state: IBooksInitialState = initialState, action: BooksActionType): IBooksInitialState =>
    reducer(state, action, handlers);