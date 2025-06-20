import styles from "./counter.module.css";
import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../theme-context";

export const Counter = ({ value, increment, decrement }) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <button
        className={classNames(styles.root, {
          [styles.darkThemeButton]: theme.theme === "dark",
          [styles.ligthThemeButton]: theme.theme === "light",
        })}
        onClick={decrement}
      >
        -
      </button>
      {value}
      <button
        className={classNames(styles.root, {
          [styles.darkThemeButton]: theme.theme === "dark",
          [styles.ligthThemeButton]: theme.theme === "light",
        })}
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};
