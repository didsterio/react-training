import { DishDescriptionTile } from "../tiles/dishDescriptionTile";

export const Restaurant = ({ restaurant }) => {
  return (
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
  );
};
