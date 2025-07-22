import { compose, createSlice, createSelector } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../normilized-mocks";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {},
  reducers: {
    addToCart: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    removeFromCart: (state, { payload }) => {
      if (!state[payload]) {
        return null;
      }
      state[payload] = state[payload] - 1;
      if (state[payload] === 0) {
        delete state[payload];
      }
    },
  },
});

export const selectCartItems = createSelector(
  [(state) => state.cartSlice],
  (cartState) => 
    Object.keys(cartState).reduce((acc, id) => {
      acc.push({ id, amount: cartState[id] });
      return acc;
    }, [])
);

export const selectItemAmountById = createSelector(
  [(state) => state.cartSlice, (_, id) => id],
  (cartState, id) => cartState[id]
);

export const { addToCart, removeFromCart } = cartSlice.actions;