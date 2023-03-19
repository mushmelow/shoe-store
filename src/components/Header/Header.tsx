import React from "react";
import { NavLink, useParams } from "react-router-dom";
import logo from "../../assets/logo.png";
import { HeaderContainer, LogoImg, Nav, Title } from "./Header.style";

const Navigator = () => {
  const { store, model } = useParams();

  return (
    <Nav>
      <NavLink to="/">Dashboard</NavLink>
      {store ? <NavLink to={`/store/${store}`}>{store}</NavLink> : undefined}
      {model ? (
        <NavLink to={`/store/${store}/model/${model}`}>{model}</NavLink>
      ) : undefined}
    </Nav>
  );
};

export const Header: React.FC = () => {
  const { store, model } = useParams();
  return (
    <HeaderContainer>
      <LogoImg src={logo} />
      <Navigator />
      <Title>
        {!store && !model && "Dashboard"}
        {store && !model ? (
          <>
            store <span>{store}</span> inventory change history
          </>
        ) : undefined}
        {store && model ? (
          <>
            store <span>{store}</span> model <span>{model}</span> inventory
            change history
          </>
        ) : undefined}
      </Title>
    </HeaderContainer>
  );
};
