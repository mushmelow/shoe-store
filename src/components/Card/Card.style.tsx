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

export const SingleCard = styled.div`
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
  margin: 10px;
  height: 50px;
  width: 140px;
`;
