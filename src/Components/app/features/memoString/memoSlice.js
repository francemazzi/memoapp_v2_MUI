import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", memo: "Andare a passeggio con Bobby 🐶", data: "13/10/2022" },
  { id: "2", memo: "Preparare i cioccolatini per Giada", data: "14/10/2022" },
];

export const memoStringSlice = createSlice({
  name: "memos",
  initialState,
  reducers: {
    memoAdd(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllMemos = (state) => state.memos;

export const { memoAdd } = memoStringSlice.actions;
export default memoStringSlice.reducer;
