import { useContext } from "react";
import styles from "./auth-button.module.css";
import { AuthContext } from "../app/app";
import Button from "../button/button";

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

  console.log("auth = ", auth);

  return (
    <div className={styles.authContainer}>
      {auth.isAuth && auth.userName && <div>{auth.userName}</div>}
      <Button text={auth.isAuth ? "Logout" : "Login"} onClick={handleClick} />
    </div>
  );
};

export default AuthButton;
