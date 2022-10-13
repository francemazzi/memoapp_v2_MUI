import { configureStore } from "@reduxjs/toolkit";
import memoCounterReducer from "./features/counter/counterSlice";
import memoStringReducer from "./features/memoString/memoSlice";

export const store = configureStore({
  reducer: {
    counter: memoCounterReducer,
    memos: memoStringReducer,
  },
});
