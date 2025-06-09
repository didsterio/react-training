import { createContext, useContext, useState } from "react";
import { Layout } from "../layout/layout";
import { MainView } from "../mainView/mainView";

export const ThemeContext = createContext();
export const AuthContext = createContext();

export const App = () => {
  const [theme, setTheme] = useState("Light");
  const [auth, setAuth] = useState({ isAuth: false });

  return (
    <AuthContext value={{ auth, setAuth }}>
      <ThemeContext value={{ theme, setTheme }}>
        <Layout>
          <MainView />
        </Layout>
      </ThemeContext>
    </AuthContext>
  );
};
