import { ReviewForm } from "../reviewform/reviewform";
import { Reviews } from "../reviews/reviews";
import { DishDescriptionTile } from "../tiles/dishDescriptionTile";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  return (
    <main style={{ flex: 1 }}>
      <div
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          padding: "16px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
        }}
      >
        DISHES
        {restaurant.menu.map((dish) => (
          <DishDescriptionTile
            name={dish.name}
            ingredients={dish.ingredients}
            price={dish.price}
          />
        ))}
      </div>
      {restaurant.reviews.length ? (
        <Reviews reviews={restaurant.reviews} />
      ) : (
        <div>No reviews</div>
      )}
      <div>
        <ReviewForm />
      </div>
    </main>
  );
};
