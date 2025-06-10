import { useContext } from "react";
import { AuthContext } from "../auth-context";
import { ReviewForm } from "../reviewform/reviewform";
import { Reviews } from "../reviews/reviews";
import { DishDescriptionTile } from "../tiles/dishDescriptionTile";
import styles from "./restaurant.module.css";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  const { auth } = useContext(AuthContext);

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
      {auth.isAuth &&
        (restaurant.reviews.length ? (
          <Reviews reviews={restaurant.reviews} />
        ) : (
          <div>No reviews</div>
        ))}
      {auth.isAuth && (
        <div>
          <ReviewForm />
        </div>
      )}
    </div>
  );
};

export default Restaurant;
