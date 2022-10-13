import { configureStore } from "@reduxjs/toolkit";
import memoCounterReducer from "./features/counter/counterSlice";
import memoStringReducer from "./features/memoString/memoSlice";
import usersReducer from "./features/users/userSlice";

export const store = configureStore({
  reducer: {
    counter: memoCounterReducer,
    memos: memoStringReducer,
    users: usersReducer,
  },
});
