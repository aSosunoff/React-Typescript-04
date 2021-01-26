import { Action } from "../reducers/helpers";

export const postRequest = (): Action<"POST"> => ({
  type: "POST",
  CallAPI: "https://jsonplaceholder.typicode.com/posts",
  methodAPI: "get",
});
