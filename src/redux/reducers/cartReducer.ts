import produce, { Draft } from "immer";
import { IBook } from "../../interfaces/IBook";
import { ICartInitialState } from "../../interfaces/ICartInitialState";
import { Action, Handlers, reducer } from "./helpers";

const initialState: ICartInitialState = {
    loading: true,
    list: [],
    orderTotal: 150,
    error: '',
}

export type ActionTypeCartSuccess = Action<'CART_SUCCESS'>
export type ActionTypeCartDelete = Action<'CART_DELETE', { payload: number }>
export type ActionTypeCartIncrease = Action<'CART_INCREASE', { id: number, price: number }>
export type ActionTypeCartDecrease = Action<'CART_DECREASE', { id: number, price: number }>
export type ActionTypeCartAddBook = Action<'CART_ADDED_BOOK', { payload: IBook | undefined }>

export type BooksActionType =
    | ActionTypeCartSuccess
    | ActionTypeCartDelete
    | ActionTypeCartIncrease
    | ActionTypeCartDecrease
    | ActionTypeCartAddBook;

const handlers: Handlers<ICartInitialState, BooksActionType> = {
    CART_SUCCESS: (draft) => {
        draft.loading = false;
        draft.error = '';
    },
    CART_DELETE: (draft, action) => {
        draft.list = draft.list.filter(item => item.id !== action.payload)
    },
    CART_INCREASE: (draft, action) => {
        const cartInc = draft.list.find(item => item.id === action.id);

        if (!cartInc) {
            return draft;
        }

        const cartIncIndex = draft.list.findIndex(item => item.id === cartInc.id);

        const count = cartInc.count + 1;
        cartInc.count++;
        cartInc.total = action.price * count;
        draft.list.splice(cartIncIndex, 1, cartInc);
    },
    CART_DECREASE: (draft, action) => {
        const cartDec = draft.list.find(item => item.id === action.id);

        if (!cartDec) {
            return draft;
        }

        const cartDecIndex = draft.list.findIndex(item => item.id === cartDec.id);

        cartDec.count--;
        if (cartDec.count === 0) {
            draft.list = draft.list.filter(item => item.id !== action.id)
        } else {
            cartDec.total = action.price * cartDec.count;
            draft.list.splice(cartDecIndex, 1, cartDec);
        }
    },
    CART_ADDED_BOOK: (draft, action): any => {
        if (!action.payload) {
            return draft;
        }

        const cart = draft.list.find(item => item.id === action.payload?.id);

        if (!cart) {
            draft.list.push({
                id: action.payload.id,
                count: 1,
                name: action.payload.title,
                total: action.payload.price,
            });
        } else {
            const bookCartIndex = draft.list.findIndex(item => item.id === action.payload?.id);

            cart.count++;
            cart.total = action.payload.price * cart.count;
            draft.list.splice(bookCartIndex, 1, cart);
        }
    },
    DEFAULT: (draft) => draft
};


// eslint-disable-next-line import/no-anonymous-default-export
export default produce((state: Draft<ICartInitialState> = initialState, action: BooksActionType): ICartInitialState =>
    reducer(state, action, handlers));