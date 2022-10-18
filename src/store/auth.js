import { createSlice } from "@reduxjs/toolkit";

const initialvalues = { isLoggedIn: false, token: "token" };

const authSlice = createSlice({
  name: "auth",
  initialState: initialvalues,
  reducers: {
    logout(state) {
      state.isLoggedIn = false;
      state.token = null;
    },
    login(state) {
      state.isLoggedIn = true;
      state.token = "some token";
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
