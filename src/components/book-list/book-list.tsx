import React, { useEffect } from "react";
import BookListItem from "../book-list-item";
import styles from "./book-list.module.scss";
import Spinner from "../spinner";
import * as I from "./interfaces";
import ErrorIndicator from "../error-indicator";

const BookList: React.FC<I.StateProps & I.DispatchProps & I.OwnProps> = ({
  books,
  onAddedToCart,
  loading,
  fetchBooks,
  error,
}) => {
  useEffect(() => fetchBooks(), [fetchBooks]);

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
