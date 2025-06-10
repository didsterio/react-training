import AuthButton from "../authbutton/authbutton.jsx";
import { Button } from "../button/button.jsx";
import ThemeButton from "../theme-button/theme-button";
import styles from "./header.module.css";

export const Header = ({ text }) => {
  return (
    <header className={styles.header}>
      <h1>{text}</h1>
      <ThemeButton />
      <AuthButton />
    </header>
  );
};
