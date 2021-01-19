import React from "react";
import styles from "./shoping-cart-table.module.scss";

interface ShoppingCartTableProps {
  items: [];
  total: number;
  onIncrease: (id: any) => void;
  onDecrease: (id: any) => void;
  onDelete: (id: any) => void;
}

const ShoppingCartTable: React.FC<ShoppingCartTableProps> = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  return (
    <div className={styles["shopping-cart-table"]}>
      <h2>Your Order</h2>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, title, count, total }, idx) => (
            <tr key={id}>
              <td>{idx + 1}</td>
              <td>{title}</td>
              <td>{count}</td>
              <td>${total}</td>
              <td>
                <button
                  onClick={() => onDelete(id)}
                  className="btn btn-outline-danger btn-sm float-right"
                >
                  <i className="fa fa-trash-o" />
                </button>
                <button
                  onClick={() => onIncrease(id)}
                  className="btn btn-outline-success btn-sm float-right"
                >
                  <i className="fa fa-plus-circle" />
                </button>
                <button
                  onClick={() => onDecrease(id)}
                  className="btn btn-outline-warning btn-sm float-right"
                >
                  <i className="fa fa-minus-circle" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles["total"]}>Total: ${total}</div>
    </div>
  );
};

export default ShoppingCartTable;
