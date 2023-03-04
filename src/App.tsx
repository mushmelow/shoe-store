import React, { useEffect, useState } from "react";
import { SHOES_MODELS, SHOES_STORES } from "./constants";

type Store = typeof SHOES_STORES[number];
type Model = typeof SHOES_MODELS[number];
type Inventory = Record<Store, Record<Model, number>>;

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
  const [inventory, setInventory] = useState(initInventory());
  const [newStore, setNewStore] = useState<Store>();
  const [newModel, setNewModel] = useState<Model>();

  useEffect(() => {
    const ws = new WebSocket("ws://192.168.0.210:8088/");
    ws.onmessage = function (event: MessageEvent<string>) {
      const data = JSON.parse(event.data) as InventoryEvent;

      setNewStore(data.store);
      setNewModel(data.model);

      setInventory((inventory) => ({
        ...inventory,
        [data.store]: {
          ...inventory[data.store],
          [data.model]: data.inventory,
        },
      }));
    };
  }, []);

  return (
    <div className="App">
      {(Object.keys(inventory) as Store[]).map(
        (store: Store, index: number) => (
          <div key={index}>
            <h1>{store}</h1>
            <div>
              {(Object.keys(inventory[store]) as Model[]).map(
                (model, index) => (
                  <div key={index}>
                    {model}: {inventory[store][model]} {store === newStore && model === newModel ? 'updated' : ''}
                  </div>
                )
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default App;
