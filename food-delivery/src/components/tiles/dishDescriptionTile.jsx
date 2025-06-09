import { DishCounter } from "./dishCounter";
import styles from "./dishtile.module.css";
import { useContext } from "react";
import { AuthContext } from "../app/app";

export const DishDescriptionTile = ({ name, ingredients, price }) => {
  const { auth } = useContext(AuthContext);
  return (
    <div className={styles.dishTile}>
      <h2>{name}</h2>
      <h4>{ingredients}</h4>
      <h4>{price}$</h4>
      {auth.isAuth && <DishCounter />}
    </div>
  );
};

export default DishDescriptionTile;
