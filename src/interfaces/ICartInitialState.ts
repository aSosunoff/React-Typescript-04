import { IBaseInitialState } from "./IBaseInitialState";
import { ICart } from "./ICart";

export interface ICartInitialState extends IBaseInitialState {
    list: ICart[],
    orderTotal: number,
}