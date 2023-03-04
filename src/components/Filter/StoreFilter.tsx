import React, { useState } from "react";
import { MenuItem, Select } from "@mui/material";
import { Store } from "../../App";

interface IStoreFilter {
  inventory: any;
}

export const StoreFilter = ({ inventory }: IStoreFilter) => {
  const [stores, setStores] = useState<Store>();

  return (
    <Select
      value={stores}
      label="stores"
      onChange={(e) => {
        console.log(e);
        //setStores(e.target.value);
      }}
    >
      {(Object.keys(inventory) as Store[]).map(
        (store: Store, index: number) => (
          <MenuItem key={index}>{store}</MenuItem>
        )
      )}
    </Select>
  );
};
