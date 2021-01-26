import { IPost } from "../interfaces/IPost";
import { Action } from "./reducers/helpers";

export const REQUEST = "_REQUEST";
export const SUCCESS = "_SUCCESS";
export const FAILURE = "_FAILURE";

type REQUEST_TYPE<T extends string> = `${T}${typeof REQUEST}`;
type SUCCESS_TYPE<T extends string> = `${T}${typeof SUCCESS}`;
type FAILURE_TYPE<T extends string> = `${T}${typeof FAILURE}`;

export type ActionType_Post_Request = Action<REQUEST_TYPE<"POST">>;
export type ActionType_Post_Success = Action<SUCCESS_TYPE<"POST">, { payload: IPost[] }>;
export type ActionType_Post_Error = Action<FAILURE_TYPE<"POST">, { payload: string }>;

export type ActionTypes_Post =
  | ActionType_Post_Request
  | ActionType_Post_Success
  | ActionType_Post_Error;

/* --- */


