import { Middleware } from "redux";
import { RootState } from "../reducers";
import { FAILURE, REQUEST, SUCCESS } from "../types";
import axios from "../../utils/axios";
import { Action } from "../reducers/helpers";

/* window.axios = axios; */
/* http://zetcode.com/javascript/jsonserver/ */

const error = () => {
  if (Math.random() > 0.5) {
    return Promise.reject(new Error("Возникла ошибка"));
  }
  return Promise.resolve();
};

export const API: Middleware<{}, RootState> = () => (next) => async (
  action: Action<any, { payload: any }>
) => {
  if (!action.CallAPI) return next(action);

  const { CallAPI, methodAPI, paramsAPI, type, ...rest } = action;

  next({ ...rest, type: type + REQUEST });

  try {
    await error();
    if (methodAPI) {
      const { data } = await (axios as any)[methodAPI](CallAPI, paramsAPI);
      return next({ ...rest, type: type + SUCCESS, payload: data });
    } else {
      throw new Error("Is not method API");
    }
  } catch (error) {
    next({ ...rest, type: type + FAILURE, payload: error.message });
  }
};
