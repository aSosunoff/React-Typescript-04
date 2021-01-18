import React from "react";
import styles from "./ErrorIndicator.module.scss";
import icon from "./death-star.png";

const ErrorIndicator: React.FC = () => {
  return (
    <div className={styles["error-indicator"]}>
      <img src={icon} alt="error icon" />
      <span className={styles["boom"]}>BOOM!</span>
    </div>
  );
};

export default ErrorIndicator;
