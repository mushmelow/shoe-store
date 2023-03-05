import { SHOES_MODELS, SHOES_STORES } from "./constants";

export type Store = typeof SHOES_STORES[number];
export type Model = typeof SHOES_MODELS[number];
export type Inventory = Record<Store, Record<Model, number>>;
