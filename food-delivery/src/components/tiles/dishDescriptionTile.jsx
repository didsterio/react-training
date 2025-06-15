import { DishCounter } from "./dishCounter";
import styles from "./dishtile.module.css";
import { useContext } from "react";
import { AuthContext } from "../auth-context";
import { selectDishById } from "../../redux/entities/dish/slice";
import { useSelector } from "react-redux";

export const DishDescriptionTile = ({ dishId }) => {
  const { auth } = useContext(AuthContext);

  const dish = useSelector((state) => selectDishById(state, dishId)) || {};

  if (!dish) {
    return null;
  }

  return (
    <div className={styles.dishTile}>
      <h2>{dish.name}</h2>
      <h4>{dish.ingredients}</h4>
      <h4>{dish.price}$</h4>
      {auth.isAuth && <DishCounter />}
    </div>
  );
};

export default DishDescriptionTile;
