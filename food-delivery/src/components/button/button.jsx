// import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../app/app";
import styles from "./button.module.css";

export const Button = ({ text }) => {
  const theme = useContext(ThemeContext);
  return <button>{text}</button>;
};

// className={classNames(styles.root, className, {
//   [styles.light]: theme === "light",
// })}
// onClick={onClick}
