import {
  ActionType_Cart_AddBook,
  ActionType_Cart_Decrease,
  ActionType_Cart_Delete,
  ActionType_Cart_Increase,
  ActionType_Cart_Success,
} from "../types";
import { RootState } from "../reducers";
import { Dispatch } from "redux";

export const cart = (): ActionType_Cart_Success => {
  return {
    type: "CART_SUCCESS",
  };
};

export const onDelete = (id: number): ActionType_Cart_Delete => {
  return {
    type: "CART_DELETE",
    payload: id,
  };
};

export const onIncrease = (id: number): any => {
  return (dispatch: Dispatch, getState: () => RootState): ActionType_Cart_Increase => {
    const { books } = getState();
    const book = books.list.find((item) => item.id === id);

    return dispatch({
      type: "CART_INCREASE",
      id,
      price: book?.price || 0,
    });
  };
};

export const onDecrease = (id: number): any => {
  return (dispatch: Dispatch, getState: () => RootState): ActionType_Cart_Decrease => {
    const { books } = getState();
    const book = books.list.find((item) => item.id === id);

    return dispatch({
      type: "CART_DECREASE",
      id,
      price: book?.price || 0,
    });
  };
};

export const onAddedToCart = (id: number): any => {
  return (dispatch: Dispatch, getState: () => RootState): ActionType_Cart_AddBook => {
    const { books } = getState();

    return dispatch({
      type: "CART_ADDED_BOOK",
      payload: books.list.find((item) => item.id === id),
    });
  };
};
