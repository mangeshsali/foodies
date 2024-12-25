import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push({ ...action.payload, quantity: 1 });
    },

    removeItem: (state, action) => {
      const removedItem = state.items.find(
        (item) => item.card.info.id === action.payload.id
      );
      if (removedItem) {
        state.items = state.items.filter(
          (item) => item.card.info.id !== action.payload.id
        );
        state.totalPrice -= removedItem.card.info.price;
      }
    },
    clearItem: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },

    getTotalAmount(state) {
      const { totalPrice, totalQuantity } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { card, quantity } = cartItem;
          const { info } = card;
          const { price, defaultPrice } = info;

          const itemTotal = ((price || defaultPrice) * quantity) / 100;

          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },

    quantityIncrease: (state, action) => {
      const indexToIncrement = action.payload;
      if (indexToIncrement >= 0 && indexToIncrement < state.items.length) {
        state.items[indexToIncrement].quantity += 1;
      }
    },

    qualityDecrease: (state, action) => {
      const indexToDecrement = action.payload;
      if (indexToDecrement >= 0 && indexToDecrement < state.items.length) {
        if (state.items[indexToDecrement].quantity > 1) {
          state.items[indexToDecrement].quantity -= 1;
        } else {
          state.items.splice(indexToDecrement, 1);
        }
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  clearItem,
  quantityIncrease,
  qualityDecrease,
  getTotalAmount,
} = cartSlice.actions;

export default cartSlice.reducer;
