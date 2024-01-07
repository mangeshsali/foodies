import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import userRegister from "./userRegister";
const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userRegister,
  },
});

export default store;
