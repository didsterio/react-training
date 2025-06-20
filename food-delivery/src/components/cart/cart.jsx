import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/entities/cart/slice";
import {
  selectAllDishes,
  selectDishById,
} from "../../redux/entities/dish/slice";
import styles from "./cart.module.css";

export const Cart = () => {
  const items = useSelector(selectCartItems);
  const dishes = useSelector(selectAllDishes);

  if (!items.length) {
    return (
      <div className={styles.cartContainer}>
        <h3>CART - empty</h3>
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      <h3>CART</h3>
      <ul>
        {items.map(({ amount, id }) => (
          <li key={id}>
            {dishes[id]?.name || `Unknown dish (${id})`} - {amount}
          </li>
        ))}
      </ul>
    </div>
  );
};
