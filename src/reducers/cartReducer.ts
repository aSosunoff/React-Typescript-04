import { IBook } from "../interfaces/IBook";
import { ICartInitialState } from "../interfaces/ICartInitialState";
import { Action } from "./helpers";

const initialState: ICartInitialState = {
    loading: true,
    list: [],
    orderTotal: 150,
    error: '',
}

export type ActionTypeCartSuccess = Action<'CART_SUCCESS'>
export type ActionTypeCartDelete = Action<'CART_DELETE'>
export type ActionTypeCartIncrease = Action<'CART_INCREASE'>
export type ActionTypeCartDecrease = Action<'CART_DECREASE'>
export type ActionTypeCartAddBook = Action<'CART_ADDED_BOOK', { payload: IBook | undefined }>

export type BooksActionType =
    | ActionTypeCartSuccess
    | ActionTypeCartDelete
    | ActionTypeCartIncrease
    | ActionTypeCartDecrease
    | ActionTypeCartAddBook;

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
        case 'CART_ADDED_BOOK':
            if (!action.payload) {
                return state;
            }

            const cart = state.list.find(item => item.id === action.payload?.id);

            if (!cart) {
                return {
                    ...state,
                    list: [...state.list, {
                        id: action.payload.id,
                        count: 1,
                        name: action.payload.title,
                        total: action.payload.price,
                    }]
                } as ICartInitialState;
            }

            const bookCartIndex = state.list.findIndex(item => item.id === action.payload?.id);

            const list = [...state.list];

            list.splice(bookCartIndex, 1, {
                ...cart,
                count: cart.count + 1
            });

            return ({
                ...state,
                list
            });

        default: return state;
    }
}

export default reducer 