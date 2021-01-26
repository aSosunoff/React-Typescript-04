import { IPost } from "../../interfaces/IPost";

export interface StateProps {
  loading: boolean;
  posts: IPost[];
  error: string;
}

export interface DispatchProps {
  fetchPost: () => any;
}

export interface OwnProps {}
