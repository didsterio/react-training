import { useContext } from "react";
import styles from "./auth-button.module.css";
import Button from "../button/button";
import { AuthContext } from "../auth-context";

export const AuthButton = () => {
  const { auth, setAuth } = useContext(AuthContext);

  const { isAuth, userName } = auth;

  const handleClick = () => {
    setAuth((prev) => {
      return prev.isAuth
        ? { isAuth: false }
        : { isAuth: true, userName: "User" };
    });
  };

  return (
    <div>
      {auth.isAuth && auth.userName && <div>{auth.userName}</div>}
      <Button
        className={styles.authContainer}
        text={auth.isAuth ? "Logout" : "Login"}
        onClick={handleClick}
      />
    </div>
  );
};

export default AuthButton;
