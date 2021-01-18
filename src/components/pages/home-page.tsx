import React from "react";
import BookList from "../book-list";

const HomePage: React.FC = () => {
  return <BookList onAddedToCart={() => {}} />;
};

export default HomePage;
