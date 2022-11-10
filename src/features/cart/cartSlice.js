import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.product.push(action.payload);
    },
    removeToCart: (state, action) => {
      state.product.splice(action.payload, 1);
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
