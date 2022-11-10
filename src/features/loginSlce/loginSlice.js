import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user.push(action.payload);
    },
    removeUser: (state, action) => {
      state.user.pop();
    },
  },
});

export const { addUser, removeUser } = loginSlice.actions;
export default loginSlice.reducer;
