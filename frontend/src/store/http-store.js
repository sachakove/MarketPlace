import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: null,
  error: null,
};

const httpSlice = createSlice({
  name: "http",
  initialState: initialState,
  reducers: {
    send(state, action) {
      return (state = {
        ...state,
        status: "pending",
        error: null,
      });
    },
    success(state, action) {
      return {
        ...state,
        status: "completed",
        error: null,
      };
    },
    error(state, action) {
      return {
        ...state,
        status: "completed",
        error: action.payload,
      };
    },
  },
});

export const httpActions = httpSlice.actions;
export default httpSlice.reducer;
