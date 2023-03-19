import React from "react";
import { Link } from "components/Link";
import { ShoesInventoryContainer } from "./ShoesInventory.style";

interface ShoesInventoryProps {
  link: string;
  model: string;
  inventory: number;
  isActive: boolean;
}

const LOW_INVENTORY = 10;
const HIGH_INVENTORY = 85;

export const ShoesInventory: React.FC<ShoesInventoryProps> = ({
  link,
  model,
  inventory,
  isActive,
}) => {
  return (
    <ShoesInventoryContainer
      isActive={isActive}
      isHigh={inventory >= HIGH_INVENTORY}
      isLow={inventory <= LOW_INVENTORY}
    >
      <th>
        <Link to={link}>{model}</Link>
      </th>
      <td>{inventory}</td>
    </ShoesInventoryContainer>
  );
};
