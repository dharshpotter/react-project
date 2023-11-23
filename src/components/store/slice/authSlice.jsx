import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
  },
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    signUp(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = true;
    },
  },
});

export default authSlice;
