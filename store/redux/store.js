import { configureStore } from "@reduxjs/toolkit";

import favoritesReducer from "./favorites";

export const store = configureStore({
  // reducers are the different slices of state, as
  // well as actions that can change that data
  reducer: {
    favoriteMeals: favoritesReducer,
  },
});
