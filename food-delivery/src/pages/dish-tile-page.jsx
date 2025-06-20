import styles from "./page.module.css";
import { useContext } from "react";

import { DishCounter } from "../components/tiles/dishCounter";
import { useSelector } from "react-redux";
import { AuthContext } from "../components/auth-context";
import { selectDishById } from "../redux/entities/dish/slice";
import { useNavigate, useParams } from "react-router";

export const DishDescriptionTilePage = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  const { dishId } = useParams();

  const dish = useSelector((state) => selectDishById(state, dishId)) || {};

  if (!dish) {
    return null;
  }

  return (
    <div className={styles.dishTile}>
      <h2>{dish.name}</h2>

      {dish.ingredients.map((ingredient) => (
        <h4>{ingredient}</h4>
      ))}
      <h4>{dish.price}$</h4>
      {auth.isAuth && <DishCounter dish={dish} />}
      <button onClick={() => navigate(-1)}>Back to restaurants</button>
    </div>
  );
};

export default DishDescriptionTilePage;
