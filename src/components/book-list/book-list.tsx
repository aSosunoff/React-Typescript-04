import React, { useEffect } from "react";
import BookListItem from "../book-list-item";
import styles from "./book-list.module.scss";
import { useBookstoreServiceContext } from "../../context/bookstore-service-context";
import Spinner from "../spinner";
import * as I from "./interfaces";
import ErrorIndicator from "../error-indicator";

const BookList: React.FC<I.StateProps & I.DispatchProps & I.OwnProps> = ({
  books,
  loadedBooks,
  onAddedToCart,
  loading,
  requestBooks,
  errorBooks,
  error,
}) => {
  const { getBook } = useBookstoreServiceContext();

  useEffect(() => {
    requestBooks();

    getBook()
      .then((date) => loadedBooks(date))
      .catch((er) => errorBooks(er.message));
  }, [loadedBooks, getBook, requestBooks, errorBooks]);

  if (loading) {
    return <Spinner />;
  } else if (error) {
    return (
      <>
        <ErrorIndicator>{error}</ErrorIndicator>
      </>
    );
  }

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

export default BookList;
