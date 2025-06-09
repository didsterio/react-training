import { useContext } from "react";
import Button from "../button/button";
import styles from "./theme-button.module.css";
import { ThemeContext } from "../app/app";

export const ThemeButton = () => {
  const { setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return <Button onClick={handleClick} text={"Theme"} />;
};

export default ThemeButton;
