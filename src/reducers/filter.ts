import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Store, Model } from "types";

interface Filter {
  stores: Store[];
  models: Model[];
}
// Define the initial state using that type
const initialState: Filter = {
  stores: [],
  models: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateStoreFilter: (state, action: PayloadAction<Store>) => {
      state.stores = state.stores.includes(action.payload)
        ? state.stores.filter((store) => store !== action.payload)
        : [...state.stores, action.payload];
    },
    updateModelFilter: (state, action: PayloadAction<Model>) => {
      state.models = state.models.includes(action.payload)
        ? state.models.filter((model) => model !== action.payload)
        : [...state.models, action.payload];
    },
    resetFilter: (state) => {
      state.stores = [];
      state.models = [];
    },
  },
});

export const { updateModelFilter, updateStoreFilter, resetFilter } =
  filterSlice.actions;

export default filterSlice.reducer;
