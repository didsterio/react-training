import { useContext } from "react";
import { AuthContext } from "../auth-context";
import { ReviewForm } from "../reviewform/reviewform";
import { Reviews } from "../reviews/reviews";
import { DishDescriptionTile } from "../tiles/dishDescriptionTile";
import styles from "./restaurant.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/slice";

export const Restaurant = ({ restaurantId }) => {
  const restaurant = useSelector(
    (state) => selectRestaurantById(state, restaurantId) || {}
  );

  if (!restaurant) {
    return null;
  }

  const { auth } = useContext(AuthContext);

  return (
    <div>
      <div className={styles.restcontainer}>
        {restaurant.menu.map((id) => (
          <DishDescriptionTile dishId={id} />
        ))}
      </div>
      {auth.isAuth &&
        (restaurant.reviews.length ? (
          <Reviews reviewIds={restaurant.reviews} />
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
