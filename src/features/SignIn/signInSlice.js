import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const signInSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    addSignInUser: (state, action) => {
      state.user = action.payload;
    },
    removeSignInUser: (state, action) => {
      state.user = {};
    },
  },
});

export const { addSignInUser, removeSignInUser } = signInSlice.actions;
export default signInSlice.reducer;
