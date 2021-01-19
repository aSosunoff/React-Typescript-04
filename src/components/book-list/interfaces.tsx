import { IBook } from "../../interfaces/IBook";

export interface StateProps {
  books: IBook[];
  loading: boolean;
}

export interface DispatchProps {
  load: (payload: IBook[]) => void;
}

export interface OwnProps {
  onAddedToCart: (id: number) => void;
}