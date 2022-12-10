import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: "Next.js + Redux",
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => ({
      ...state,
      ...action.payload.user,
    }));
  },
});

export const userAction = userSlice.actions;
export default userSlice.reducer;