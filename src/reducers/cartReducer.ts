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

const reducer = (state: ICartInitialState = initialState, action: BooksActionType): ICartInitialState => {
    switch (action.type) {
        case 'CART_SUCCESS':
            return ({
                ...state,
                loading: false,
                error: '',
            });
        case 'CART_DELETE':
            return {
                ...state,
                list: state.list.filter(item => item.id !== action.payload)
            };
        case 'CART_INCREASE':
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
            });
        case 'CART_DECREASE':
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

        default: return state;
    }
}

export default reducer 