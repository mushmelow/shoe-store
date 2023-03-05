import React from "react";
import { CardContainer, SingleCard } from "./Card.style";
import { Inventory, Store, Model } from "../../types";

interface ICard {
  inventory: Inventory;
  newStore?: Store;
  newModel?: Model;
  filterStores: Store | "all";
  filterShoes: Model[];
}

const LOW = 10;

export const Card = ({
  inventory,
  newStore,
  newModel,
  filterStores,
  filterShoes,
}: ICard) => {
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
                    isLow={inventory[store][model] < LOW}
                    isActive={store === newStore && model === newModel}
                  >
                    {model}: {inventory[store][model]}
                  </SingleCard>
                ))}
            </CardContainer>
          </div>
        ))}
    </div>
  );
};
