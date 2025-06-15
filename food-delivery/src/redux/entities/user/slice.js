import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../normilized-mocks";

const initialState = {
  ids: normalizedUsers.map(({ id }) => id),
  entities: normalizedUsers.reduce((acc, user) => {
    acc[user.id] = user;

    return acc;
  }, {}),
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  selectors: {
    selectUserIds: (state) => state.ids,
    selectUserById: (state, id) => state.entities[id],
  },
});

export const { selectUserById, selectUserIds } = userSlice.selectors;
