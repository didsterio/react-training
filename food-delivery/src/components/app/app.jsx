import { Layout } from "../layout/layout";
import { ThemeContextProvider } from "../theme-context/theme-context-provider";
import { AuthContextProvider } from "../auth-context/auth-context-provider";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router";
import { HomePage } from "../../pages/home-page";
import { RestaurantsPage } from "../../pages/restaurants-page";
import { RestaurantPage } from "../../pages/restaurant-page";
import { RestaurantMenuPage } from "../../pages/restaurant-menu";
import { RestaurantReviewsPage } from "../../pages/restaurant-reviews-page";
import { DishDescriptionTilePage } from "../../pages/dish-tile-page";

export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path={"restaurants"} element={<RestaurantsPage />}>
                  <Route path=":restaurantId" element={<RestaurantPage />}>
                    <Route index element={<Navigate to="menu" />} />
                    <Route path="menu" element={<RestaurantMenuPage />} />
                    <Route path="reviews" element={<RestaurantReviewsPage />} />
                  </Route>
                </Route>
                <Route
                  path={"dish/:dishId"}
                  element={<DishDescriptionTilePage />}
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};
