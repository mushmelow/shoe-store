import { SHOES_MODELS, SHOES_STORES } from "./constants";

export type Store = typeof SHOES_STORES[number];
export type Model = typeof SHOES_MODELS[number];
export type Inventory = Record<Store, Record<Model, number>>;

export type InventoryEvent = {
  store: Store;
  model: Model;
  inventory: number;
};

export type History = InventoryEvent & { updatedAt: number };
