import { Middleware } from "redux";
import { RootState } from "../reducers";
import { FAILURE, REQUEST, SUCCESS } from "../types";
import axios from "../../utils/axios";
import { Action } from "../reducers/helpers";

/* window.axios = axios; */
/* http://zetcode.com/javascript/jsonserver/ */

export const API: Middleware<{}, RootState> = () => (next) => async (
  action: Action<any, { payload: any }>
) => {
  if (!action.CallAPI) return next(action);

  const { CallAPI, methodAPI, paramsAPI, type, ...rest } = action;

  next({ ...rest, type: type + REQUEST });

  try {
    if (methodAPI) {
      const { data } = await (axios as any)[methodAPI](CallAPI, paramsAPI);
      return next({ ...rest, type: type + SUCCESS, payload: data });
    } else {
      throw new Error("Is not method API");
    }
  } catch (error) {
    throw next({ ...rest, type: type + FAILURE, payload: error });
  }
};
