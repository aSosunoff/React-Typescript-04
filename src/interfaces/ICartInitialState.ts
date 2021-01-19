import { ICart } from "./ICart";

export interface ICartInitialState {
    error: string,
    loading: boolean,
    list: ICart[],
}