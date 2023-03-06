import React from "react";
import { CardContainer, SingleCard } from "./Card.style";
import { Inventory, Store, Model, History } from "../../types";

interface ICard {
  inventory: Inventory;
  history: History[];
  filterStores: Store | "all";
  filterShoes: Model[];
}

const LOW_INVENTORY = 10;
const HIGH_INVENTORY = 85;

export const Card = ({
  inventory,
  history,
  filterStores,
  filterShoes,
}: ICard) => {
  function isActive(store: Store, model: Model): boolean {
    const matchedRecord = history
      .filter((h) => h.model === model && h.store === store)
      .reverse();
    if (matchedRecord.length === 0) return false;

    return new Date().getTime() - matchedRecord[0].updatedAt < 2000;
  }

  return (
    <div>
      {(Object.keys(inventory) as Store[])
        .filter((store) => filterStores === "all" || store === filterStores)
        .map((store, index) => (
          <div key={index}>
            <h1>{store}</h1>
            <CardContainer>
              {(Object.keys(inventory[store]) as Model[])
                .filter(
                  (model) =>
                    filterShoes.length === 0 || filterShoes.includes(model)
                )
                .map((model, index) => (
                  <SingleCard
                    key={index}
                    isLow={inventory[store][model] < LOW_INVENTORY}
                    isHigh={inventory[store][model] > HIGH_INVENTORY}
                    isActive={isActive(store, model)}
                  >
                    <div>{model}</div>
                    <div>{inventory[store][model]}</div>
                  </SingleCard>
                ))}
            </CardContainer>
          </div>
        ))}
    </div>
  );
};
