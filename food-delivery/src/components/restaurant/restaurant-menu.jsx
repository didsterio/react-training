import { useContext } from "react";
import { AuthContext } from "../auth-context";
import { DishDescriptionTile } from "../tiles/dishDescriptionTile";
import styles from "./restaurant.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/slice";

export const RestaurantMenu = ({ restaurantId }) => {
  const restaurant = useSelector(
    (state) => selectRestaurantById(state, restaurantId) || {}
  );

  if (!restaurant) {
    return null;
  }

  return (
    <div>
      <div className={styles.restcontainer}>
        {restaurant.menu.map((id) => (
          <DishDescriptionTile key={id} dishId={id} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
