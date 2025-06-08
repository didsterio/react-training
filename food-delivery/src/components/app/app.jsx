import { createContext } from "react";
import { Layout } from "../layout/layout";
import { MainView } from "../mainView/mainView";

export const ThemeContext = createContext();

export const App = () => {
  return (
    <ThemeContext value={"lightMode"}>
      <Layout>
        <MainView />
      </Layout>
    </ThemeContext>
  );
};
