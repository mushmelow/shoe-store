import React from "react";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Store } from "../../types";
import { SHOES_STORES } from "../../constants";

interface IStoreFilter {
  filterStores: Store | "all";
  setFilterStores: (store: Store) => void;
}

export const StoreFilter = ({
  setFilterStores,
  filterStores,
}: IStoreFilter) => {
  const handleChange = (event: SelectChangeEvent) => {
    setFilterStores(event.target.value as Store);
  };

  return (
    <Select value={filterStores || ""} label="stores" onChange={handleChange}>
      <MenuItem value="all">Show all store</MenuItem>
      {SHOES_STORES.map((store: string, index: number) => (
        <MenuItem key={index} value={store}>
          {store}
        </MenuItem>
      ))}
    </Select>
  );
};
