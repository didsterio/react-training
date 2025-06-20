import { Counter } from "../counter/counter";
import { useCounter } from "./useCounter";

export const DishCounter = ({ dish }) => {
  const { value, ondecrementDish, onincrementDish } = useCounter(dish);

  return (
    <Counter
      value={value}
      increment={onincrementDish}
      decrement={ondecrementDish}
    />
  );
};
