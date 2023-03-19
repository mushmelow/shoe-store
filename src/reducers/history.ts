import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { History } from "types";

// Define the initial state using that type
const initialState: History[] = [];

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addHistory: (state, action: PayloadAction<History>) => {
      state.push(action.payload);
    },
  },
});

export const { addHistory } = historySlice.actions;

export default historySlice.reducer;
