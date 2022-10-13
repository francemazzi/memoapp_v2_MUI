import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", mail: "francemazzi@gmail.com", pw: "123" },
  { id: "0", mail: "saverio@gmail.com", pw: "123" },
];
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
