import produce, { Draft } from "immer";
import { IBook } from "../../interfaces/IBook";
import { IBooksInitialState } from "../../interfaces/IBooksInitialState";
import { Action, Handlers, reducer } from "./helpers";

const initialState: IBooksInitialState = {
  loading: true,
  list: [],
  error: "",
};

export type ActionTypeBooksLoad = Action<"BOOKS_SUCCESS", { payload: IBook[] }>;
export type ActionTypeBooksRequest = Action<"BOOKS_REQUEST">;
export type ActionTypeBooksError = Action<"BOOKS_FAILURE", { payload: string }>;

export type BooksActionType = ActionTypeBooksLoad | ActionTypeBooksRequest | ActionTypeBooksError;

const handlers: Handlers<IBooksInitialState, BooksActionType> = {
  BOOKS_SUCCESS: (draft, action) => {
    draft.loading = false;
    draft.error = "";
    draft.list = action.payload;
  },
  BOOKS_REQUEST: (draft) => {
    draft.error = "";
    draft.loading = true;
  },
  BOOKS_FAILURE: (draft, action): any => {
    draft.loading = false;
    draft.error = action.payload;
    draft.list = [];
  },
  DEFAULT: (draft) => draft,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default produce(
  (state: Draft<IBooksInitialState> = initialState, action: BooksActionType): IBooksInitialState =>
    reducer(state, action, handlers)
);
