import { NavLink } from "react-router";
import styles from "./navButton.module.css";
import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../theme-context";

export const NavButton = ({ to, name }) => {
  const theme = useContext(ThemeContext);
  return (
    <NavLink
      className={classNames(styles.root, {
        [styles.darkThemeButton]: theme.theme === "dark",
        [styles.ligthThemeButton]: theme.theme === "light",
      })}
      to={to}
    >
      {name}
    </NavLink>
  );
};
