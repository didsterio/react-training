import { Layout } from "../layout/layout";
import { MainView } from "../mainView/mainView";
import { ThemeContextProvider } from "../theme-context/theme-context-provider";
import { AuthContextProvider } from "../auth-context/auth-context-provider";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Layout>
            <MainView />
          </Layout>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};
