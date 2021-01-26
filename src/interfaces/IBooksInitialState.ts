import { IBaseInitialState } from "./IBaseInitialState";
import { IBook } from "./IBook";

export interface IBooksInitialState extends IBaseInitialState {
  list: IBook[];
}
