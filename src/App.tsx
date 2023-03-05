import { Button, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Header } from "./components";
import { Card } from "./components/Card";
import { ModelFilter, StoreFilter } from "./components/Filter";
import { SHOES_MODELS, SHOES_STORES } from "./constants";
import { Inventory, Model, Store } from "./types";

type InventoryEvent = {
  store: Store;
  model: Model;
  inventory: number;
};

const initInventory = () => {
  const inventory: Record<string, Record<string, number>> = {};

  for (const store of SHOES_STORES) {
    inventory[store] = {};
    for (const model of SHOES_MODELS) {
      inventory[store][model] = 0;
    }
  }

  return inventory as Inventory;
};

export const App = () => {
  const [inventory, setInventory] = useState<Inventory>(initInventory());
  const [lastUpdated, setLastUpdated] = useState<{
    model: Model;
    store: Store;
  }>();
  const [filterStores, setFilterStores] = useState<Store | "all">("all");
  const [filterShoes, setFilterShoes] = useState<Model[]>([]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080/");
    ws.onmessage = function (event: MessageEvent<string>) {
      const data = JSON.parse(event.data) as InventoryEvent;

      setInventory((inventory) => ({
        ...inventory,
        [data.store]: {
          ...inventory[data.store],
          [data.model]: data.inventory,
        },
      }));
      setLastUpdated({ model: data.model, store: data.store });
      console.log(data);
    };
  }, []);

  const handleClick = () => {};

  return (
    <div className="App">
      <Header />

      <Stack flexDirection="row" sx={{ height: "50px" }}>
        <StoreFilter
          filterStores={filterStores}
          setFilterStores={setFilterStores}
        />

        <ModelFilter
          filterShoes={filterShoes}
          setFilterShoes={(filterValue: Model) => {
            setFilterShoes(
              filterShoes.includes(filterValue)
                ? filterShoes.filter((shoe) => shoe !== filterValue)
                : [...filterShoes, filterValue]
            );
          }}
        />
      </Stack>
      <Card
        inventory={inventory}
        newStore={lastUpdated?.store}
        newModel={lastUpdated?.model}
        filterStores={filterStores}
        filterShoes={filterShoes}
      />
    </div>
  );
};

export default App;
