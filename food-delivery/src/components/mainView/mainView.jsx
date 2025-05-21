import { restaurants } from "../../mock";
import { DishDescriptionTile } from "../tiles/dishDescriptionTile";
import { useState } from "react";

export const MainView = ({ restaurantId }) => {
  const [currentRestId, setCurrentRestId] = useState(
    restaurants[0]?.id ?? null
  );
  const restaurant = restaurants.find((r) => r.id === currentRestId);

  //   const restaurant = restaurants.find(
  //     (restaurant) => restaurant.id === restaurantId
  //   );
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
            onClick={() => setCurrentRestId(id)}
          >
            {name}
          </button>
        ))}
      </div>
      <main style={{ flex: 1 }}>
        <div
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            padding: "16px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", // n колонок
            gap: "16px", // отступ между элементами
          }}
        >
          {restaurant.menu.map((dish) => (
            <DishDescriptionTile
              name={dish.name}
              ingredients={dish.ingredients}
              price={dish.price}
            />
          ))}
        </div>
      </main>
    </div>
  );
};
