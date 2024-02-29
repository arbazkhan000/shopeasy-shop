import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      state.push(action.payload);
    },
    removeToCard: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCard, removeToCard } = cartSlice.actions;

export default cartSlice.reducer;
