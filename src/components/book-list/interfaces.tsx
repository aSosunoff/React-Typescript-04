import { IBook } from "../../interfaces/IBook";

export interface StateProps {
  books: IBook[];
  loading: boolean;
  error: string;
}

export interface DispatchProps {
  fetchBooks: () => void;
  onAddedToCart: (id: number) => void;
}

export interface OwnProps {
  fetchBooks: () => void;
}
