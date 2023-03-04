import React from "react";
import { CardContainer, SingleCard } from "./Card.style";
import { Inventory, Store } from "../../App";

interface ICard {
  inventory: any;
}

export const Card = ({ inventory }: ICard) => {
  console.log(inventory);
  return (
    <div>
      {(Object.keys(inventory) as Store[]).map(
        (store: Store, index: number) => (
          <div key={index}>
            <h1>{store}</h1>
          </div>
        )
      )}
    </div>
  );
};
