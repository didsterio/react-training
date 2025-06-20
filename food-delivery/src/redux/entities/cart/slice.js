import { compose, createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../normilized-mocks";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {},
  reducers: {
    addToCart: (state, { payload }) => {
      const { id, name } = payload;
      state[id] = (state[id] || 0) + 1;
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
  selectors: {
    selectCartItems: (state) =>
      Object.keys(state).reduce((acc, id) => {
        acc.push({ id, amount: state[id] });
        return acc;
      }, []),
    selectItemAmoutById: (state, id) => {
      return state[id];
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const { selectCartItems, selectItemAmoutById } = cartSlice.selectors;
