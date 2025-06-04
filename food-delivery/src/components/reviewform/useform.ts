import { useReducer } from "react";

const INITIAL_STATE = {
  user: "",
  text: "",
  rating: "1",
};

const SET_USER_ACTION = "setUser";
const SET_TEXT_ACTION = "setText";
const INCREMENT_RATING_ACTION = "incrementRating";
const DECREMENT_RATING_ACTION = "decrementRating";

const RESET_ACTION = "reset";

function formReducer(state, { type, payload }) {
  switch (type) {
    case SET_USER_ACTION:
      return {
        ...INITIAL_STATE,
        user: payload,
      };
    case SET_TEXT_ACTION:
      return {
        ...state,
        text: payload,
      };
    case INCREMENT_RATING_ACTION:
      return {
        ...state,
        rating: Math.min(state.rating + 1, 5),
      };
    case DECREMENT_RATING_ACTION:
      return {
        ...state,
        rating: Math.max(state.rating - 1, 1),
      };
    case RESET_ACTION:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export const useForm = () => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

  const { user, text, rating } = state;

  const onUserChange = (user) => {
    dispatch({ type: SET_USER_ACTION, payload: user });
  };

  const onTextChange = (text) => {
    dispatch({ type: SET_TEXT_ACTION, payload: text });
  };

  const onIncrementRating = (rating) => {
    dispatch({ type: INCREMENT_RATING_ACTION, payload: rating });
  };

  const onDecrementRating = (rating) => {
    dispatch({ type: DECREMENT_RATING_ACTION, payload: rating });
  };

  const resetForm = () => dispatch({ type: RESET_ACTION, payload: "" });

  return {
    state,
    onUserChange,
    onTextChange,
    onIncrementRating,
    onDecrementRating,
    resetForm,
  };
};
