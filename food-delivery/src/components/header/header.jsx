import AuthButton from "../authbutton/authbutton.jsx";
import { Button } from "../button/button.jsx";
import ThemeButton from "../theme-button/theme-button";
import styles from "./header.module.css";

export const Header = ({ text }) => {
  return (
    <header
      style={{
        position: "relative",
        textAlign: "center",
        padding: "10px",
        border: "1px solid #ddd",
      }}
    >
      <Button text={"Theme button"} />
      <span>{text}</span>
      <div style={{ position: "absolute", right: "10px" }}>
        User name
        <Button text={"Auth button"} />
      </div>
    </header>
  );
};
