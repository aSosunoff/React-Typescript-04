import React from "react";
import { IBook } from "../../interfaces/IBook";
import styles from "./book-list-item.module.scss";

interface BookListItemProps {
  book: IBook;
  onAddedToCart: () => void;
}

const BookListItem: React.FC<BookListItemProps> = ({ book, onAddedToCart }) => {
  const { title, author } = book;

  return (
    <div className={styles["book-list-item"]}>
      {/* <div className={styles["book-cover"]}>
        <img src={coverImage} alt="cover" />
      </div> */}
      <div className={styles["book-details"]}>
        <span className={styles["book-title"]}>{title}</span>
        <div className={styles["book-author"]}>{author}</div>
        {/* <div className={styles["book-price"]}>${price}</div> */}
        <button onClick={onAddedToCart} className="btn btn-info add-to-cart">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default BookListItem;
