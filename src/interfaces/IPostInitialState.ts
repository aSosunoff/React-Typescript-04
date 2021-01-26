import { IBaseInitialState } from "./IBaseInitialState";
import { IPost } from "./IPost";

export interface IPostInitialState extends IBaseInitialState {
  list: IPost[];
}
