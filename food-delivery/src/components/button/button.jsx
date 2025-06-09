// import classNames from "classnames";
import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../app/app";
import styles from "./button.module.css";

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
