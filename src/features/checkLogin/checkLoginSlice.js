import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

export const checkLogin = createSlice({
  name: "checkLogin",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.isLoggedIn = true;
    },
    logOut: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});

export const {logIn, logOut} = checkLogin.actions
export default checkLogin.reducer 
