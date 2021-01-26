import produce, { Draft } from "immer";
import { IPostInitialState } from "../../interfaces/IPostInitialState";
import { ActionTypes_Post } from "../types";
import { Handlers, reducer } from "./helpers";

const initialState: IPostInitialState = {
  loading: true,
  list: [],
  error: "",
};

const handlers: Handlers<IPostInitialState, ActionTypes_Post> = {
  POST_REQUEST: (draft): any => {
    draft.error = "";
    draft.loading = true;
    draft.list = [];
  },
  POST_SUCCESS: (draft, action) => {
    draft.loading = false;
    draft.list = action.payload;
  },
  POST_FAILURE: (draft, action) => {
    draft.loading = false;
    draft.error = action.payload;
    draft.list = [];
  },
  DEFAULT: (draft) => draft,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default produce(
  (state: Draft<IPostInitialState> = initialState, action: ActionTypes_Post): IPostInitialState =>
    reducer(state, action, handlers)
);
