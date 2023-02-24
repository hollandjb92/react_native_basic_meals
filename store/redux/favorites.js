import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    mealIds: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.mealIds.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.mealIds.splice(state.mealIds.indexOf(action.payload.id), 1);
    },
  },
});

export default favoritesSlice.reducer;
export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
