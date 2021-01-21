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
    CART_SUCCESS: (state) => ({
        ...state,
        loading: false,
        error: '',
    }),
    CART_DELETE: (state, action) => ({
        ...state,
        list: state.list.filter(item => item.id !== action.payload)
    }),
    CART_INCREASE: (state, action) => {
        const cartInc = state.list.find(item => item.id === action.id);

        if (!cartInc) {
            return state;
        }

        const cartIncIndex = state.list.findIndex(item => item.id === cartInc.id);

        const newList = [...state.list];
        const count = cartInc.count + 1;
        newList.splice(cartIncIndex, 1, {
            ...cartInc,
            count,
            total: action.price * count
        });

        return ({
            ...state,
            list: newList
        })
    },
    CART_DECREASE: (state, action) => {
        const cartDec = state.list.find(item => item.id === action.id);

        if (!cartDec) {
            return state;
        }

        const cartDecIndex = state.list.findIndex(item => item.id === cartDec.id);


        const countDec = cartDec.count - 1;
        if (countDec === 0) {
            return ({
                ...state,
                list: state.list.filter(item => item.id !== action.id)
            });
        }

        const newListDec = [...state.list];

        newListDec.splice(cartDecIndex, 1, {
            ...cartDec,
            count: countDec,
            total: action.price * countDec
        });

        return ({
            ...state,
            list: newListDec
        });
    },
    CART_ADDED_BOOK: (state, action) => {
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
        const countNew = cart.count + 1;
        list.splice(bookCartIndex, 1, {
            ...cart,
            count: countNew,
            total: action.payload.price * countNew
        });

        return ({
            ...state,
            list
        });
    },
    DEFAULT: (state) => state
};


// eslint-disable-next-line import/no-anonymous-default-export
export default (state: ICartInitialState = initialState, action: BooksActionType): ICartInitialState =>
    reducer(state, action, handlers);