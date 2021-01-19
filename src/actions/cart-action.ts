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
    }

};

export const onIncrease = (id: number): ActionTypeCartIncrease => {
    return {
        type: 'CART_INCREASE',
    }
};

export const onDecrease = (id: number): ActionTypeCartDecrease => {
    return {
        type: 'CART_DECREASE',
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