import { restaurants } from "../../mock";
import { Restaurant } from "../restaurant/restaurant";
import { useState } from "react";
import styles from "./MainView.module.css";
import Button from "../button/button";

export const MainView = ({ restaurantId }) => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState(
    restaurants[0]?.id ?? null
  );
  const restaurant = restaurants.find((r) => r.id === currentRestaurantId);

  return (
    <div>
      <div className={styles.MainView}>
        {restaurants.map(({ id, name, menu, reviews }) => (
          <Button
            key={id}
            onClick={() => setCurrentRestaurantId(id)}
            text={name}
          />
        ))}
      </div>
      <Restaurant restaurant={restaurant} />
    </div>
  );
};
