import styles from "./MainView.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurant/slice";
import { RestaurantTab } from "../restaurant-tab/restaurant-tab";
import { Outlet } from "react-router";

export const MainView = () => {
  const restaurantsIds = useSelector(selectRestaurantIds);

  return (
    <div>
      <div className={styles.MainView}>
        {restaurantsIds.map((id) => (
          <RestaurantTab key={id} id={id} to={`/restaurants/${id}`} />
        ))}
      </div>

      <Outlet />
    </div>
  );
};
