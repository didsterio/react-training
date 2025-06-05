import { ReviewForm } from "../reviewform/reviewform";
import { Reviews } from "../reviews/reviews";
import { DishDescriptionTile } from "../tiles/dishDescriptionTile";
import styles from "./restaurant.module.css";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  return (
    <div>
      <div className={styles.restcontainer}>
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
    </div>
  );
};
