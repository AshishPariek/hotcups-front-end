import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const adminSlice = createSlice({
  name: "admin",
  initialState: initialState,
  reducers: {
    logIn: (state, action) => {
      localStorage.setItem("logIn", action.payload.token);
      state.isAuthenticated = true;
    },
    logOut: (state) => {
      localStorage.removeItem("logIn");
      state.isAuthenticated = false;
    },
  },
});

export const { logIn, logOut } = adminSlice.actions;
export default adminSlice;
