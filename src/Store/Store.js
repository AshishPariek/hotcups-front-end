import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "./ShopsSlice";

export const store = configureStore({ reducer: shopSlice.reducer });
