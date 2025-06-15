import { useState } from "react";
import styles from "./MainView.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurant/slice";
import { RestaurantTab } from "../restaurant-tab/restaurant-tab";
import Restaurant from "../restaurant/restaurant";

export const MainView = () => {
  const restaurantsIds = useSelector(selectRestaurantIds);
  const [currentRestaurantId, setCurrentRestaurantId] = useState(
    restaurantsIds[0]
  );

  return (
    <div>
      <div className={styles.MainView}>
        {restaurantsIds.map((id) => (
          <RestaurantTab
            key={id}
            id={id}
            onClick={() => setCurrentRestaurantId(id)}
          />
        ))}
      </div>
      <Restaurant restaurantId={currentRestaurantId} />
    </div>
  );
};
