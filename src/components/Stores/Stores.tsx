import React from "react";
import { useAppSelector } from "hooks";
import { Store } from "types";
import { StoreInventory } from "./StoreInventory";
import { StoresContainer } from "./Stores.style";

export const Stores: React.FC = () => {
  const inventory = useAppSelector((state) => state.inventory);
  const selectedStores = useAppSelector((state) => state.filter.stores);
  const filterStore = (store: Store) =>
    selectedStores.length === 0 || selectedStores.includes(store);

  return (
    <StoresContainer>
      {(Object.keys(inventory) as Store[])
        .filter(filterStore)
        .map((store, index) => (
          <StoreInventory key={index} store={store} />
        ))}
    </StoresContainer>
  );
};
