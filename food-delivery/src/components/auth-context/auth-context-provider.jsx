import { useState } from "react";
import { AuthContext } from ".";

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isAuth: false });

  return <AuthContext value={{ auth, setAuth }}>{children}</AuthContext>;
};
