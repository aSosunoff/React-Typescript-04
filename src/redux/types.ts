import { IBook } from "../interfaces/IBook";
import { IPost } from "../interfaces/IPost";
import { Action } from "./reducers/helpers";

export const REQUEST = "_REQUEST";
export const SUCCESS = "_SUCCESS";
export const FAILURE = "_FAILURE";

type REQUEST_TYPE<T extends string> = `${T}${typeof REQUEST}`;
type SUCCESS_TYPE<T extends string> = `${T}${typeof SUCCESS}`;
type FAILURE_TYPE<T extends string> = `${T}${typeof FAILURE}`;

/* Post */

export type ActionType_Post_Request = Action<REQUEST_TYPE<"POST">>;
export type ActionType_Post_Success = Action<SUCCESS_TYPE<"POST">, { payload: IPost[] }>;
export type ActionType_Post_Error = Action<FAILURE_TYPE<"POST">, { payload: string }>;

export type ActionTypes_Post =
  | ActionType_Post_Request
  | ActionType_Post_Success
  | ActionType_Post_Error;

/* --- */

/* Books */

export type ActionType_Books_Success = Action<"BOOKS_SUCCESS", { payload: IBook[] }>;
export type ActionType_Books_Request = Action<"BOOKS_REQUEST">;
export type ActionType_Books_Error = Action<"BOOKS_FAILURE", { payload: string }>;

export type BooksActionType =
  | ActionType_Books_Success
  | ActionType_Books_Request
  | ActionType_Books_Error;

/* --- */
