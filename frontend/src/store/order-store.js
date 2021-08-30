import { createSlice } from "@reduxjs/toolkit";

const initialState = { orders: null };

const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    getOrders(state, action) {
      return { ...state, orders: action.payload };
    },
    getOrderItems(state, action) {
      return onGetOrderItems(state, action);
    },
  },
});

const onGetOrderItems = (state, action) => {
  return;
};

export const orderActions = orderSlice.actions;
export default orderSlice.reducer;
