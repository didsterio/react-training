import { useParams } from "react-router";
import RestaurantReviews from "../components/restaurant/restaurant-reviews";

export const RestaurantReviewsPage = () => {
  const { restaurantId } = useParams();
  return (
    <div>
      <RestaurantReviews restaurantId={restaurantId} />
    </div>
  );
};
