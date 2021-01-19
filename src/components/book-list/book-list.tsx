import React, { useEffect } from "react";
import BookListItem from "../book-list-item";
import styles from "./book-list.module.scss";
import { useBookstoreServiceContext } from "../../context/bookstore-service-context";
import Spinner from "../spinner";
import * as I from "./interfaces";

const BookList: React.FC<I.StateProps & I.DispatchProps & I.OwnProps> = ({
  books,
  load,
  onAddedToCart,
  loading,
}) => {
  const { getBook } = useBookstoreServiceContext();

  useEffect(() => {
    getBook().then((date) => load(date));
  }, [load, getBook]);

  if (loading) {
    return <Spinner />;
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
