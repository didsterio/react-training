import { useReducer } from "react";

const INITIAL_STATE = {
  count: 0,
};

const INCREMENT_DISH_ACTION = "incrementDish";
const DECREMENT_DISH_ACTION = "decrementDish";

function countReducer(state, { type, payload }) {
  switch (type) {
    case INCREMENT_DISH_ACTION:
      return {
        ...state,
        count: Math.min(state.count + 1, 15),
      };
    case DECREMENT_DISH_ACTION:
      return {
        ...state,
        count: Math.max(state.count - 1, 0),
      };
    default:
      return state;
  }
}

export const useCounter = () => {
  const [state, dispatch] = useReducer(countReducer, INITIAL_STATE);

  const { count } = state;

  const onincrementDish = (count) => {
    dispatch({ type: INCREMENT_DISH_ACTION, payload: count });
  };

  const ondecrementDish = (count) => {
    dispatch({ type: DECREMENT_DISH_ACTION, payload: count });
  };

  return {
    state,
    onincrementDish,
    ondecrementDish,
  };
};
