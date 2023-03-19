import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 100px;
`;

export const Nav = styled.nav`
  display: flex;
  column-gap: 8px;
  margin-top: 16px;
`;

export const Title = styled.h1`
  font-size: 24px;
  > span {
    color: brown;
    font-style: italic;
  }
`;
