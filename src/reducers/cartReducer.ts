import { ICartInitialState } from "../interfaces/ICartInitialState";
import { Action } from "./helpers";

const initialState: ICartInitialState = {
    loading: true,
    list: [{
        id: 1,
        name: 'Book 1',
        count: 3,
        total: 150
    }, {
        id: 2,
        name: 'Book 2',
        count: 2,
        total: 70
    }],
    orderTotal: 150,
    error: '',
}

export type ActionTypeCartSuccess = Action<'CART_SUCCESS'>
export type ActionTypeCartDelete = Action<'CART_DELETE'>
export type ActionTypeCartIncrease = Action<'CART_INCREASE'>
export type ActionTypeCartDecrease = Action<'CART_DECREASE'>

export type BooksActionType =
    | ActionTypeCartSuccess
    | ActionTypeCartDelete
    | ActionTypeCartIncrease
    | ActionTypeCartDecrease;

const reducer = (state: ICartInitialState = initialState, action: BooksActionType) => {
    switch (action.type) {
        case 'CART_SUCCESS':
            return ({
                ...state,
                loading: false,
                error: '',
            });
        case 'CART_DELETE':
            return state;
        case 'CART_INCREASE':
            return state;
        case 'CART_DECREASE':
            return state;

        default: return state;
    }
}

export default reducer 