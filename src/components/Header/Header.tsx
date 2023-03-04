import React from "react";
import logo from "../../assets/logo.png";
import { HeaderContainer, LogoImg } from "./Header.style";

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoImg src={logo} />
      <p>ALDO Inventory Monitoring</p>
    </HeaderContainer>
  );
};
