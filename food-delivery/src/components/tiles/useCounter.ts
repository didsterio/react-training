import { useCallback, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectItemAmountById
} from "../../redux/entities/cart/slice";

export const useCounter = (dish) => {
  const dispatch = useDispatch();

  const amount = useSelector((state) => selectItemAmountById(state, dish.id));

  const onincrementDish = useCallback(
    () => dispatch(addToCart(dish.id)),
    [dispatch, dish.id]
  );

  const ondecrementDish = useCallback(
    () => dispatch(removeFromCart(dish.id)),
    [dispatch, dish.id]
  );

  return {
    value: amount,
    onincrementDish,
    ondecrementDish,
  };
};
