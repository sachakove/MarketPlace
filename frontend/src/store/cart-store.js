import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalAmount: 0, totalPrice: 0, Date: null };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      onAddItem(state, action);
    },
    removeItem(state, action) {
      onRemoveItem(state, action);
    },
    cehckOut(state, action) {
      onCehckout(state, action);
    },
  },
});

const onCehckout = (state, action) => {
  const date = new Date();
};

const onAddItem = (state, action) => {
  state.totalAmount = state.totalAmount + action.payload.amount;
  const items = [...state.items];
  const existingItemIndex = state.items.findIndex(
    (item) => action.payload._id === item._id
  );

  if (existingItemIndex !== -1) {
    const existingItem = {
      ...items[existingItemIndex],
      amount: items[existingItemIndex].amount + action.payload.amount,
      total:
        items[existingItemIndex].total +
        action.payload.amount * items[existingItemIndex].price,
    };
    state.totalPrice =
      state.totalPrice + action.payload.amount * items[existingItemIndex].price;
    items[existingItemIndex] = existingItem;
    return (state.items = items);
  } else {
    const total = action.payload.price * action.payload.amount;
    state.totalPrice = state.totalPrice + total;
    return state.items.push({
      ...action.payload,
      total: total,
    });
  }
};

const onRemoveItem = (state, action) => {
  state.totalAmount--;
  const items = [...state.items];
  const existingItemIndex = state.items.findIndex(
    (item) => action.payload === item._id
  );

  if (existingItemIndex !== -1) {
    if (items[existingItemIndex].amount !== 1) {
      const existingItem = {
        ...items[existingItemIndex],
        amount: items[existingItemIndex].amount - 1,
        total: items[existingItemIndex].total - items[existingItemIndex].price,
      };
      state.totalPrice = state.totalPrice - existingItem.price;
      items[existingItemIndex] = existingItem;
      return (state.items = items);
    } else {
      state.totalPrice = state.totalPrice - items[existingItemIndex].price;
      return (state.items = items.filter(
        (item) => item._id !== items[existingItemIndex]._id
      ));
    }
  }
  return state.items;
};

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
