import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../slice/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cardSlice,
  },
});
