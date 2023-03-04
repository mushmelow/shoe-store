import React, { useState } from "react";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Store } from "../../App";

interface IStoreFilter {
  inventory: any;
  filterStores: Store;
  setFilterStores: (store: Store) => void;
}

export const StoreFilter = ({
  inventory,
  setFilterStores,
  filterStores,
}: IStoreFilter) => {
  const handleChange = (event: SelectChangeEvent) => {
    setFilterStores(event.target.value as Store);
  };

  return (
    <Select value={filterStores} label="stores" onChange={handleChange}>
      {(Object.keys(inventory) as Store[]).map(
        (store: Store, index: number) => (
          <MenuItem key={index} value={store}>
            {store}
          </MenuItem>
        )
      )}
    </Select>
  );
};
