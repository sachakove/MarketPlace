import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainProducts: null,
  categories: null,
  subCategories: null,
  items: null,
  item: null,
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    getCategories(state, action) {
      return onGetCategories(state, action);
    },
    getSubCategories(state, action) {
      return onGetSubCategories(state, action);
    },

    getMainProducts(state, action) {
      return onMainProducts(state, action);
    },

    getItems(state, action) {
      return onGetItems(state, action);
    },
    getItem(state, action) {
      console.log(`here`);
      return { ...state, item: action.payload };
    },
    clearItems(state, action) {
      return { ...state, items: null };
    },
  },
});

const onGetCategories = (state, action) => {
  return void (state.categories = action.payload);
};

const onGetSubCategories = (state, action) => {
  return {
    ...state,
    subCategories: action.payload,
  };
};

const onMainProducts = (state, action) => {
  return {
    ...state,
    mainProducts: action.payload,
  };
};

const onGetItems = (state, action) => {
  state.items = null;
  return {
    ...state,
    items: action.payload,
  };
};

export const productActions = productSlice.actions;
export default productSlice.reducer;
