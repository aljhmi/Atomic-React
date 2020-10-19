import React from "react";
import styled from "styled-components";
import Logo from "../atoms/Logo";
import Search from "../molecules/Search";
import Menu from "../molecules/Menu";

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  direction: rtl;
  font-family: "Markazi Text", serif;
  border-bottom: 1px solid #bababa;
  flex-wrap: wrap;
  @media screen and (max-width: 680px) {
    flex-direction: column;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <Menu />
      <Search />
    </HeaderWrapper>
  );
}
