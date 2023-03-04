import React from "react";
import { CardContainer, SingleCard } from "./Card.style";
import { Inventory, Store, Model } from "../../App";

interface ICard {
  inventory: any;
  newStore: any;
  newModel: any;
  filterStores?: any;
}

export const Card = ({
  inventory,
  newStore,
  newModel,
  filterStores,
}: ICard) => {
  return (
    <div>
      {(Object.keys(inventory) as Store[])
        .filter((store) => store === filterStores)
        .map((store: Store, index: number) => (
          <div key={index}>
            <h1>{store}</h1>
            <CardContainer>
              {(Object.keys(inventory[store]) as Model[]).map(
                (model, index) => (
                  <SingleCard key={index}>
                    {model}: {inventory[store][model]}{" "}
                    {store === newStore && model === newModel ? "updated" : ""}
                  </SingleCard>
                )
              )}
            </CardContainer>
          </div>
        ))}
    </div>
  );
};
