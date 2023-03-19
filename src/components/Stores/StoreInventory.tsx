import React from "react";
import { Store, Model } from "types";
import { useAppSelector } from "hooks";
import { Link } from "components/Link";
import { ShoesInventory } from "./ShoesInventory";
import { Table } from "./StoreInventory.style";

interface StoreInventoryProps {
  store: Store;
}

export const StoreInventory: React.FC<StoreInventoryProps> = ({ store }) => {
  const inventory = useAppSelector((state) => state.inventory);
  const history = useAppSelector((state) => state.history);
  const selectedModels = useAppSelector((state) => state.filter.models);
  const isActive = (store: Store, model: Model): boolean => {
    const matchedRecord = history
      .filter((h) => h.model === model && h.store === store)
      .reverse();
    if (matchedRecord.length === 0) return false;

    return new Date().getTime() - matchedRecord[0].updatedAt < 2000;
  };
  const filterModel = (model: Model) =>
    selectedModels.length === 0 || selectedModels.includes(model);

  return (
    <Table>
      <thead>
        <tr>
          <th colSpan={2}>
            <Link role="link" to={`/store/${store}`}>
              {store}
            </Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {(Object.keys(inventory[store]) as Model[])
          .filter(filterModel)
          .map((model, index) => (
            <ShoesInventory
              key={index}
              link={`/store/${store}/model/${model}`}
              model={model}
              inventory={inventory[store][model]}
              isActive={isActive(store, model)}
            />
          ))}
      </tbody>
    </Table>
  );
};
