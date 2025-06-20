import AuthButton from "../authbutton/authbutton.jsx";
import ThemeButton from "../theme-button/theme-button";

export const Header = ({ text }) => {
  return (
    <header>
      <h1>{text}</h1>
      <div>
        <ThemeButton />
        <AuthButton />
      </div>
    </header>
  );
};
