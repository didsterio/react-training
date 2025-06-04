import { DishCounter } from "./dishCounter";
import { useCounter } from "./useCounter";
import styles from "./dishtile.module.css";

export const DishDescriptionTile = ({ name, ingredients, price }) => {
  return (
    <div className={styles.dishTile}>
      <h2>{name}</h2>
      <h4>{ingredients}</h4>
      <h4>{price}$</h4>
      <DishCounter />
    </div>
  );
};
