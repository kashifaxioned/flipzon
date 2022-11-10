import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "./features/api/apiSlice";
import cartReducer from "./features/cart/cartSlice";
import loginReducer from './features/loginSlce/loginSlice'
import checkLogin from './features/checkLogin/checkLoginSlice'
import signInSlice from "./features/SignIn/signInSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    users: loginReducer,
    signInUser: signInSlice,
    checkLogin, 
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

export default store;
