import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from "reducers/inventory";
import historyReducer from "reducers/history";
import filterReducer from "reducers/filter";

export const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
    history: historyReducer,
    filter: filterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
