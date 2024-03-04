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
      state.cartTotalAmount += action.payload.card.info.price;
    },
    removeItem: (state, action) => {
      const removedItem = state.items.find(
        (item) => item.card.info.id === action.payload.id
      );
      if (removedItem) {
        state.items = state.items.filter(
          (item) => item.card.info.id !== action.payload.id
        );
        state.cartTotalAmount -= removedItem.card.info.price;
      }
    },
    clearItem: (state) => {
      state.items = [];
      state.cartTotalAmount = 0;
    },
    getTotalAmount(state) {
      state.cartTotalAmount = state.items.reduce(
        (total, item) => total + item.card.info.price,
        0
      );
    },
    qualityIncrease: (state, action) => {
      state.items.push(action.payload);
      state.cartTotalAmount += action.payload.card.info.price;
    },
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
