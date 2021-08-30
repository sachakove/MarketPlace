import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoggedIn: false,
  token: null,
  status: null,
  error: null,
};

const userSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    send(state, action) {
      return { ...state, status: "pending", error: null };
    },
    success(state, action) {
      return { ...state, status: "completed", error: null };
    },
    error(state, action) {
      return { ...state, status: "completed", error: action.payload };
    },
    resetErrors(state) {
      return { ...state, error: null };
    },
    checkLoggedIn(state, action) {
      const token = localStorage.getItem("isLoggedIn");
      return { ...state, isLoggedIn: !!token, token: token };
    },
    login(state, action) {
      localStorage.setItem("isLoggedIn", action.payload.token);
      console.log(action.payload);
      return { ...state, isLoggedIn: true, user: action.payload };
    },
    register(state, action) {
      const user = action.payload;
      localStorage.setItem("isLoggedIn", user.token);
      return { ...state, isLoggedIn: true, user: user };
    },
    logout(state, action) {
      localStorage.removeItem("isLoggedIn");
      return { ...state, isLoggedIn: false, user: null };
    },
    getUserDetails(state, action) {
      return { ...state, user: action.payload };
    },
    updateUserContact(state, action) {
      return { ...state, user: action.payload };
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
