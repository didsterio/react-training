import { restaurants } from "../../mock";
import { ProgressBar } from "../progressbar/progressbar";
import { Restaurant } from "../restaurant/restaurant";
import { useState } from "react";
import styles from "./MainView.module.css";

export const MainView = ({ restaurantId }) => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState(
    restaurants[0]?.id ?? null
  );
  const restaurant = restaurants.find((r) => r.id === currentRestaurantId);

  return (
    <div>
      <div className={styles.MainView}>
        {restaurants.map(({ id, name, menu, reviews }) => (
          <button
            style={{ flex: 1, width: "300px" }}
            key={id}
            onClick={() => setCurrentRestaurantId(id)}
          >
            {name}
          </button>
        ))}
      </div>
      <Restaurant restaurant={restaurant} />
    </div>
  );
};
