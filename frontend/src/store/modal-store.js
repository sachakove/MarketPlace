import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModalAuth: false,
  showModalCart: false,
  showModalItem: false,
  showModalProfile: false,
  showModalSearch: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    showModalAuth(state, action) {
      return {
        ...state,
        showModalAuth: true,
      };
    },
    showModalCart(state, action) {
      return { ...state, showModalCart: true };
    },
    showModalItem(state, action) {
      return { ...state, showModalItem: true };
    },
    showModalProfile(state, action) {
      return { ...state, showModalProfile: true };
    },
    showModalSearch(state, action) {
      return { ...state, showModalSearch: true };
    },
    hideModal(state, action) {
      return {
        ...state,
        showModalAuth: false,
        showModalCart: false,
        showModalItem: false,
        showModalProfile: false,
        showModalSearch: false,
      };
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
