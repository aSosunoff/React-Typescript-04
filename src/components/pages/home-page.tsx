import React from "react";
import { useBookstoreServiceContext } from "../../context/bookstore-service-context";
import BookList from "../book-list";

const HomePage: React.FC = () => {
  const { getBook } = useBookstoreServiceContext();
  return <BookList books={getBook()} onAddedToCart={() => {}} />;
};

export default HomePage;
