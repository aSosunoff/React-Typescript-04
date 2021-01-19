import { IBook } from "../../interfaces/IBook";

export interface StateProps {
  books: IBook[];
  loading: boolean;
  error: string;
}

export interface DispatchProps {
  fetchBooks: () => void;
}

export interface OwnProps {
  onAddedToCart: (id: number) => void;
  fetchBooks: () => void;
}
