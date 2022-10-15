import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = {
  memoTot: [],
  status: "idle",
  error: null,
};

export const memoStringSlice = createSlice({
  name: "memos",
  initialState,
  reducers: {
    memoAdd: {
      reducer(state, action) {
        state.memoTot.push(action.payload);
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
      const memoTarget = state.memoTot.find((memo) => memo.id === memoId);
      if (memoTarget) {
        memoTarget.reactions[reaction]++;
      }
    },
    removeMemo: (state, action) => {
      const { memoId } = action.payload;
      state.memoTot = state.memoTot.filter((memo) => memo.id !== memoId);
    },
  },
});

export const selectAllMemos = (state) => state.memos.memoTot;

export const { memoAdd, reactionAdd, removeMemo } = memoStringSlice.actions;
export default memoStringSlice.reducer;
