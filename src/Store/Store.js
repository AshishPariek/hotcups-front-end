import { combineReducers, configureStore } from "@reduxjs/toolkit";
import shopSlice from "./ShopsSlice";
import adminSlice from "./adminSlice";

const root = combineReducers({
  shop: shopSlice.reducer,
  admin: adminSlice.reducer,
});

export const store = configureStore({ reducer: root });
