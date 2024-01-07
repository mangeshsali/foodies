import { createSlice } from "@reduxjs/toolkit";

const userRegister = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    adduser: (state, action) => {
      return action.payload;
    },
    removeuser: (state, action) => {
      return null;
    },
  },
});

export const { adduser, removeuser } = userRegister.actions;
export default userRegister.reducer;
