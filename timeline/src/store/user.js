import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      name: '',
      token: '',
      isLoggedIn: false,
    },
  },
  reducers: {
    logIn(state, action) {
      const payload = action.payload;

      state.user.name = payload.user.name;
      state.user.token = payload.authorisation.token;
      state.user.isLoggedIn = true;
    },
    logOut(state) {
      state.user.name = '';
      state.user.token = '';
      state.user.isLoggedIn = false;
    }
  }
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;