import React, { useEffect } from "react";
import { connect } from "react-redux";
import { IBook } from "../../interfaces/IBook";
import BookListItem from "../book-list-item";
import { RootState } from "../../reducers";
import styles from "./book-list.module.scss";
import { useBookstoreServiceContext } from "../../context/bookstore-service-context";
import { load } from "../../actions/books-action";

interface StateProps {
  books: IBook[];
}

interface DispatchProps {
  load: (payload: IBook[]) => void;
}

interface OwnProps {
  onAddedToCart: (id: number) => void;
}

type Props = StateProps & DispatchProps & OwnProps;

const BookList: React.FC<Props> = ({ books, load, onAddedToCart }) => {
  const { getBook } = useBookstoreServiceContext();

  useEffect(() => {
    load(getBook());
  }, [load, getBook]);

  return (
    <ul className={styles["book-list"]}>
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookListItem
              book={book}
              onAddedToCart={() => onAddedToCart(book.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = ({ books }: RootState) => ({
  books: books.list,
});

export default connect(mapStateToProps, {
  load,
})(BookList);
