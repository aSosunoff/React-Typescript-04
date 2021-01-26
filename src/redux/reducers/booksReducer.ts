import produce, { Draft } from "immer";
import { IBooksInitialState } from "../../interfaces/IBooksInitialState";
import { ActionType_Books } from "../types";
import { Handlers, reducer } from "./helpers";

const initialState: IBooksInitialState = {
  loading: true,
  list: [],
  error: "",
};

const handlers: Handlers<IBooksInitialState, ActionType_Books> = {
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
  (state: Draft<IBooksInitialState> = initialState, action: ActionType_Books): IBooksInitialState =>
    reducer(state, action, handlers)
);
