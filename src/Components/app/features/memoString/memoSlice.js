import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [{ id: "", memo: "", data: "" }];

export const memoStringSlice = createSlice({
  name: "memos",
  initialState,
  reducers: {
    memoAdd: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(memo, userId) {
        return {
          payload: {
            id: nanoid(),
            memo,
            userId,
          },
        };
      },
    },
  },
});

export const selectAllMemos = (state) => state.memos;

export const { memoAdd } = memoStringSlice.actions;
export default memoStringSlice.reducer;
