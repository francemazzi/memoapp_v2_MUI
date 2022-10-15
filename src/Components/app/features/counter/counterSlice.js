import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const memoCounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      } else {
        state.count = 0;
      }
    },
  },
});

export const { increment, decrement } = memoCounterSlice.actions;
export default memoCounterSlice.reducer;
