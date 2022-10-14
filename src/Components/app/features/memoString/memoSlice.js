import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "",
    memo: "",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: { toDo: 0, workInProgres: 0 },
    // memoList: [],
  },
];

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
            date: new Date().toISOString(),
            userId,
            reactions: { toDo: 0, workInProgres: 0 },
          },
        };
      },
    },
    reactionAdd(state, action) {
      const { memoId, reaction } = action.payload;
      const memoTarget = state.find((memo) => memo.id === memoId);
      if (memoTarget) {
        memoTarget.reactions[reaction]++;
      }
    },
    removeMemo: (state, action) => {
      const { memoId, memolist } = action.payload;
      state.memolist = memolist.filter((memo) => memo.id !== memoId);
      // state = memolist.filter((memo) => memo.id !== memoId);
    },
  },
});

export const selectAllMemos = (state) => state.memos;

export const { memoAdd, reactionAdd, removeMemo } = memoStringSlice.actions;
export default memoStringSlice.reducer;
