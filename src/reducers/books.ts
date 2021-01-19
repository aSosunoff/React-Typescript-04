import { IBook } from "../interfaces/IBook";
import { IBooksInitialState } from "../interfaces/IBooksInitialState";
import { Action, THandlers } from "./helpers";
import { BooksType } from "./types/books-type";

const initialState: IBooksInitialState = {
    loading: true,
    list: [],
}

export type BooksLoadActionType = Action<BooksType.BOOKS_LOAD, { payload: IBook[] }>

export type BooksActionType =
    | BooksLoadActionType;
/* | Action<BookTypes.GET_BOOK, { id: string }> */

const handlers: THandlers<BooksActionType, IBooksInitialState> = {
    BOOKS_LOAD: (state, { payload }) => ({
        ...state,
        loading: false,
        list: payload,
    }),
    /* GET_BOOK: (state) => state, */
    /* [LOAD_CONTACTS + REQUEST]: (draft) => {
        draft.loading = true;
        draft.loaded = false;
        draft.error = null;
    },*/
    DEFAULT: (state) => state,
};

const reducer = (state: IBooksInitialState = initialState, action: BooksActionType) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}

export default reducer 