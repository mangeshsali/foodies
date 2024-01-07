import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    cartTotalAmount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (x) => x.card.info.id !== action.payload.id
      );
    },
    clearItem: (state) => {
      state.items = [];
    },
    getTotalAmount: (state, action) => {
      let { total, quantity } = state.items.reduce(
        (acc, curr) => {
          const { price } = curr;
          const itemtotal = price;

          acc.totalAmount += itemtotal;
          return acc;
        },
        { tatalAmount: 0 }
      );
      state.cartTotalAmount = total;
    },
    qualityIncrease: (state, action) => {},

    qualityDecrease: (state, action) => {},
  },
});

export const {
  addItem,
  removeItem,
  clearItem,
  qualityIncrease,
  qualityDecrease,
  getTotalAmount,
} = cartSlice.actions;
export default cartSlice.reducer;
