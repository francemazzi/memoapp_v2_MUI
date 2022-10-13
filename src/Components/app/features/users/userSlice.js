import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", mail: "francemazzi@gmail.com", pw: "123" },
  { id: "1", mail: "saverio@gmail.com", pw: "123" },
];
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
