import React from "react";
import BookList from "../book-list";
import ShoppingCartTable from "../shoping-cart-table";

const HomePage: React.FC = () => {
  return (
    <div>
      <BookList />
      <ShoppingCartTable />
    </div>
  );
};

export default HomePage;
