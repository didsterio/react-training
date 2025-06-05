import { useState } from "react";
import styles from "./counter.module.css";

export const Counter = ({ value, increment, decrement }) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={decrement}>
        -
      </button>
      {value}
      <button className={styles.button} onClick={increment}>
        +
      </button>
    </div>
  );
};
