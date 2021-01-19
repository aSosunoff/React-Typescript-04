import { ActionTypeCartDecrease, ActionTypeCartDelete, ActionTypeCartIncrease, ActionTypeCartSuccess } from "../reducers/cartReducer";

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