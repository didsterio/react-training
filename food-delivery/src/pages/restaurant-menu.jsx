import { useParams } from "react-router";
import { RestaurantMenu } from "../components/restaurant/restaurant-menu";

export const RestaurantMenuPage = () => {
  const { restaurantId } = useParams();
  return (
    <div>
      <RestaurantMenu restaurantId={restaurantId} />
    </div>
  );
};
