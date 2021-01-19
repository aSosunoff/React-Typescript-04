import { ActionTypeCartAddBook, ActionTypeCartDecrease, ActionTypeCartDelete, ActionTypeCartIncrease, ActionTypeCartSuccess } from "../reducers/cartReducer";
import { RootState } from '../reducers';
import { Dispatch } from "redux";

export const cart = (): ActionTypeCartSuccess => {
    return {
        type: 'CART_SUCCESS',
    }
};

export const onDelete = (id: number): ActionTypeCartDelete => {
    return {
        type: 'CART_DELETE',
        payload: id
    }

};

export const onIncrease = (id: number): any => {
    return (dispatch: Dispatch, getState: () => RootState): ActionTypeCartIncrease => {
        const { books } = getState();
        const book = books.list.find(item => item.id === id);

        return dispatch({
            type: 'CART_INCREASE',
            id,
            price: book?.price || 0
        });
    }
};

export const onDecrease = (id: number): any => {
    return (dispatch: Dispatch, getState: () => RootState): ActionTypeCartDecrease => {
        const { books } = getState();
        const book = books.list.find(item => item.id === id);

        return dispatch({
            type: 'CART_DECREASE',
            id,
            price: book?.price || 0
        });
    }
};

export const onAddedToCart = (id: number): any => {
    return (dispatch: Dispatch, getState: () => RootState): ActionTypeCartAddBook => {
        const { books } = getState();

        return dispatch({
            type: 'CART_ADDED_BOOK',
            payload: books.list.find(item => item.id === id),
        });
    };
};