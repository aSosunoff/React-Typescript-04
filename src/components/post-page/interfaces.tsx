import { IPost } from "../../interfaces/IPost";

export interface StateProps {
  loading: boolean;
  posts: IPost[];
}

export interface DispatchProps {
  fetchPost: () => any;
}

export interface OwnProps {}
