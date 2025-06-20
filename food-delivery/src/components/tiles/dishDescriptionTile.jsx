import styles from "./dishtile.module.css";
import { useContext } from "react";
import { AuthContext } from "../auth-context";
import { selectDishById } from "../../redux/entities/dish/slice";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";

export const DishDescriptionTile = ({ dishId }) => {
  const { auth } = useContext(AuthContext);

  const dish = useSelector((state) => selectDishById(state, dishId)) || {};

  if (!dish) {
    return null;
  }

  return (
    <div className={styles.dishTile}>
      <NavLink to={`/dish/${dishId}`}>
        <h2>{dish.name}</h2>
      </NavLink>
    </div>
  );
};

export default DishDescriptionTile;
