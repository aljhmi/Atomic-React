import React from "react";
import MenuLink from "../atoms/MenuLink";
import styled from "styled-components";

const Nav = styled.nav`
  margin: auto;
  flex: 1 1 auto;
  @media screen and (max-width: 480px) {
    flex: none;
  }
`;

export default function Menu() {
  return (
    <Nav>
      <ul style={{ padding: "0" }}>
        <MenuLink className="active">الرئيسية</MenuLink>
        <MenuLink>المتجر</MenuLink>
        <MenuLink>من نحن</MenuLink>
        <MenuLink>المدونة</MenuLink>
        <MenuLink>اتصل بنا</MenuLink>
      </ul>
    </Nav>
  );
}
