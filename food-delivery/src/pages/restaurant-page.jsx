import { Outlet, useParams } from "react-router";
import { NavButton } from "../components/NavButton/navbutton";
import { selectRestaurantById } from "../redux/entities/restaurant/slice";
import { useSelector } from "react-redux";
import styles from "./page.module.css";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const restaurant =
    useSelector((state) => selectRestaurantById(state, restaurantId)) || {};
  const { name } = restaurant;

  return (
    <div className={styles.restaurantPageMaincontainer}>
      <h1>{name}</h1>
      <div className={styles.restaurantPageTabsContainer}>
        <NavButton to={"menu"} name={"Menu"} />
        <NavButton to={"reviews"} name={"Reviews"} />
      </div>
      <Outlet />
    </div>
  );
};
