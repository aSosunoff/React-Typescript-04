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

export type BooksActionType =
    | ActionTypeCartSuccess;

const reducer = (state: ICartInitialState = initialState, action: BooksActionType) => {
    switch (action.type) {
        case 'CART_SUCCESS':
            return ({
                ...state,
                loading: false,
                error: '',
            });

        default: return state;
    }
}

export default reducer 