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

export type ActionType_Books =
  | ActionType_Books_Success
  | ActionType_Books_Request
  | ActionType_Books_Error;

/* --- */

/* Cart */

export type ActionType_Cart_Success = Action<"CART_SUCCESS">;
export type ActionType_Cart_Delete = Action<"CART_DELETE", { payload: number }>;
export type ActionType_Cart_Increase = Action<"CART_INCREASE", { id: number; price: number }>;
export type ActionType_Cart_Decrease = Action<"CART_DECREASE", { id: number; price: number }>;
export type ActionType_Cart_AddBook = Action<"CART_ADDED_BOOK", { payload: IBook | undefined }>;

export type ActionType_Cart =
  | ActionType_Cart_Success
  | ActionType_Cart_Delete
  | ActionType_Cart_Increase
  | ActionType_Cart_Decrease
  | ActionType_Cart_AddBook;

/* --- */
