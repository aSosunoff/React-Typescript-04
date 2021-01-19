import React from "react";
import styles from "./ErrorIndicator.module.scss";
import icon from "./death-star.png";

interface ErrorIndicatorProps {
  children?: string;
}

const ErrorIndicator: React.FC<ErrorIndicatorProps> = ({ children }) => {
  const mssage = children || "BOOM!";
  return (
    <div className={styles["error-indicator"]}>
      <img src={icon} alt="error icon" />
      <span className={styles["boom"]}>{mssage}</span>
    </div>
  );
};

export default ErrorIndicator;
