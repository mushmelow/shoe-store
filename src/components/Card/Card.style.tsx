import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  background-color: #fff;
  color: #444;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

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

export const SingleCard = styled.div<{
  isActive?: boolean;
  isLow?: boolean;
  isHigh?: boolean;
}>`
  background-color: ${bgColor};
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
  margin: 10px;
  height: 50px;
  width: 140px;
  transition: background-color 1s ease;
`;
