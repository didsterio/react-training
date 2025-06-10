import classNames from "classnames";
import { useContext } from "react";
import styles from "./button.module.css";
import { ThemeContext } from "../theme-context";

export const Button = ({ text, onClick }) => {
  const theme = useContext(ThemeContext);

  return (
    <button
      className={classNames(styles.root, {
        [styles.darkThemeButton]: theme.theme === "dark",
        [styles.ligthThemeButton]: theme.theme === "light",
      })}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
