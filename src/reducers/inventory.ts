import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Inventory, Model, Store } from "types";
import { SHOES_MODELS, SHOES_STORES } from "../constants";

const initInventory = () => {
  const inventory: Record<string, Record<string, number>> = {};

  for (const store of SHOES_STORES) {
    inventory[store] = {};
    for (const model of SHOES_MODELS) {
      inventory[store][model] = Math.floor(Math.random() * 100);
    }
  }

  return inventory as Inventory;
};

// Define the initial state using that type
const initialState: Inventory = initInventory();

export const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    updateInventory: (
      state,
      action: PayloadAction<{ store: Store; model: Model; inventory: number }>
    ) => {
      const { store, model, inventory } = action.payload;
      state[store][model] = inventory;
    },
  },
});

export const { updateInventory } = inventorySlice.actions;

export default inventorySlice.reducer;
