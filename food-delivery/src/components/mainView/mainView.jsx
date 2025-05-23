import { restaurants } from "../../mock";
import { Restaurant } from "../restaurant/restaurant";
import { DishDescriptionTile } from "../tiles/dishDescriptionTile";
import { useState } from "react";

export const MainView = ({ restaurantId }) => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState(
    restaurants[0]?.id ?? null
  );
  const restaurant = restaurants.find((r) => r.id === currentRestaurantId);

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "8px",
          width: "100%",
          padding: "10px",
        }}
      >
        {restaurants.map(({ id, name, menu, reviews }) => (
          <button
            style={{ flex: 1 }}
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
