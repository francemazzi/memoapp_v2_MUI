import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";

const MEMO_URL = "https://jsonplaceholder.typicode.com/todos";

const initialState = {
  memoTot: [],
  status: "idle", // idle / loading / failed
  error: null,
};

export const fetchMemo = createAsyncThunk("memos/fetchMemo", async () => {
  try {
    const response = await axios.get(MEMO_URL);
    return [...response.data];
  } catch (err) {
    return err.message;
  }
});

//add new post
export const addNewMemo = createAsyncThunk(
  "memos/addNewPost",
  async (initialMemo) => {
    try {
      const response = await axios.get(MEMO_URL, initialMemo);
      return [...response.data];
    } catch (err) {
      return err.message;
    }
  }
);

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

  extraReducers(builder) {
    builder
      .addCase(fetchMemo.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchMemo.fulfilled, (state, action) => {
        state.status = "succeeded";
        let min = 1;
        const loadedMemo = action.payload.map((memo) => {
          memo.date = sub(new Date(), { minutes: min++ }).toISOString();
          memo.reactions = {
            toDo: 0,
            workInProgres: 0,
          };
          return memo;
        });
        state.memoTot = state.memoTot.concat(loadedMemo);
      })
      .addCase(fetchMemo.rejected, (state, action) => {
        state.status = "failed";
        state.message = "Errore caricamento Memo";
      })
      .addCase(addNewMemo.fulfilled, (state, action) => {
        action.payload.userId = Number(action.payload.userId);
        action.payload.date = new Date().toISOString();
        action.payload.reactions = {
          toDo: 0,
          workInProgres: 0,
        };

        state.memoTot.push(action.payload);
      });
  },
});

export const selectAllMemos = (state) => state.memos.memoTot;
export const getMemoStatus = (state) => state.memos.status;
export const getmemoError = (state) => state.memos.error;

export const { memoAdd, reactionAdd, removeMemo } = memoStringSlice.actions;
export default memoStringSlice.reducer;
