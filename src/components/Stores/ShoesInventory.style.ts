import styled from "styled-components";

function bgColor({
  isActive,
  isLow,
  isHigh,
}: {
  isActive?: boolean;
  isLow?: boolean;
  isHigh?: boolean;
}) {
  if (isActive) return "green";
  if (isLow) return "red";
  if (isHigh) return "orange";
  return "#444";
}

export const ShoesInventoryContainer = styled.tr<{
  isActive?: boolean;
  isLow?: boolean;
  isHigh?: boolean;
}>`
  background-color: ${bgColor};
  color: white;
  transition: background-color 1s ease;
  > th,
  td {
    padding: 8px;
    text-align: center;
  }
`;
