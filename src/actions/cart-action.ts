import { ActionTypeCartSuccess } from "../reducers/cartReducer";

export const cart = (): ActionTypeCartSuccess => {
    return {
        type: 'CART_SUCCESS',
    }
};