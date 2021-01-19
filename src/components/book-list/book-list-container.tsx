import React from "react";
import BookListItem from "../book-list-item";
import styles from "./book-list.module.scss";
import * as I from "./interfaces";

type BookListContainerProps = Pick<
  I.StateProps & I.DispatchProps & I.OwnProps,
  "books" | "onAddedToCart"
>;

const BookListContainer: React.FC<BookListContainerProps> = ({
  books,
  onAddedToCart,
}) => {
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

export default BookListContainer;
