import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-store";
import userSlice from "./user-store";
import modalSlice from "./modal-store";
import httpSlice from "./http-store";
import productSlice from "./product-store";
import orderSlice from "./order-store";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    auth: userSlice,
    modal: modalSlice,
    http: httpSlice,
    product: productSlice,
    order: orderSlice,
  },
});

export default store;
