import { Counter } from "../counter/counter";
import { useCounter } from "./useCounter";

export const DishCounter = () => {
  const { state, ondecrementDish, onincrementDish } = useCounter();
  const { count } = state;
  return (
    <Counter
      value={count}
      increment={onincrementDish}
      decrement={ondecrementDish}
    />
  );
};
