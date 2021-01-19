import { IBook } from "./IBook";

export interface IBooksInitialState {
    error: string,
    loading: boolean,
    list: IBook[],
}