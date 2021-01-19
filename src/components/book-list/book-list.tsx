import React, { useEffect } from "react";
import Spinner from "../spinner";
import * as I from "./interfaces";
import ErrorIndicator from "../error-indicator";
import BookListContainer from "./book-list-container";

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
    return <ErrorIndicator>{error}</ErrorIndicator>;
  }

  return <BookListContainer books={books} onAddedToCart={onAddedToCart} />;
};

export default BookList;
