import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import userRegister from "./userRegister";
import LocationSlice from "./LocationSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userRegister,
    locationDetail: LocationSlice,
  },
});

export default store;
