import { createSlice } from "@reduxjs/toolkit";

export const successSlice = createSlice({
  name: "success",
  initialState: {
    success: {
      message: "",
    },
  },
  reducers: {
    setMessage: (state, action) => {
      state.success.message = action.payload;
    },
    clearMessage: (state) => {
      state.success.message = "";
    }
  },
});

export const { setMessage, clearMessage } = successSlice.actions;

export default successSlice.reducer;