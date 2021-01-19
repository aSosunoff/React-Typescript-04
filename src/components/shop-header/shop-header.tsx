import React from "react";
import cn from "classnames";
import styles from "./shop-header.module.scss";
import { Link } from "react-router-dom";

interface ShopHeaderProps {
  numItems: number;
  total: number;
}

const ShopHeader: React.FC<ShopHeaderProps> = ({ numItems, total }) => {
  return (
    <header className={cn(styles["shop-header"], "row")}>
      <Link to="/">
        <div className={cn(styles["logo"], "text-dark")}>ReStore</div>
      </Link>
      <Link to="/cart">
        <div className={styles["shopping-cart"]}>
          <i className={cn(styles["cart-icon"], "fa fa-shopping-cart")} />
          {numItems} items (${total})
        </div>
      </Link>
    </header>
  );
};

export default ShopHeader;
