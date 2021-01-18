import React from "react";
import { connect } from "react-redux";
import { IBook } from "../../interfaces/IBook";
import BookListItem from "../book-list-item";
import { ICombineReducers } from "../../reducers";
import styles from "./book-list.module.scss";

interface BookListProps {
  books: IBook[];
  onAddedToCart: (id: number) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onAddedToCart }) => {
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

const mapStateToProps = ({ books }: ICombineReducers) => ({
  books: books.list,
});

export default connect(mapStateToProps)(BookList);
