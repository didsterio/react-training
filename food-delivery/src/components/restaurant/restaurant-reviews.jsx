import { useContext } from "react";
import { AuthContext } from "../auth-context";
import { ReviewForm } from "../reviewform/reviewform";
import { Reviews } from "../reviews/reviews";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/slice";

export const RestaurantReviews = ({ restaurantId }) => {
  const restaurant = useSelector(
    (state) => selectRestaurantById(state, restaurantId) || {}
  );

  if (!restaurant) {
    return null;
  }

  const { auth } = useContext(AuthContext);

  return (
    <div>
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

export default RestaurantReviews;
