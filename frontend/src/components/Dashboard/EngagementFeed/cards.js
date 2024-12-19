import React from "react";
import styles from "../styles/cards.module.css";

export const Card = ({ title, children }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
};
