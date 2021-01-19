import { IBook } from "./IBook";

export interface IBooksInitialState {
    loading: boolean,
    list: IBook[],
}