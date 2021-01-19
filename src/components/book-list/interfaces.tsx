import { IBook } from "../../interfaces/IBook";

export interface StateProps {
  books: IBook[];
  loading: boolean;
  error: string;
}

export interface DispatchProps {
  loadedBooks: (payload: IBook[]) => void;
  requestBooks: () => void;
  errorBooks: (payload: string) => void;
}

export interface OwnProps {
  onAddedToCart: (id: number) => void;
}
