import { configureStore } from "@reduxjs/toolkit";
import memoCounterReducer from "./features/counter/memoCounterSlice";

export const store = configureStore({
  reducer: {
    counter: memoCounterReducer,
  },
});
