import { Layout } from "../layout/layout";
import { MainView } from "../mainView/mainView";
import { ThemeContextProvider } from "../theme-context/theme-context-provider";
import { AuthContextProvider } from "../auth-context/auth-context-provider";

export const App = () => {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Layout>
          <MainView />
        </Layout>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
};
