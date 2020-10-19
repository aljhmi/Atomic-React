import React from "react";
import Brand from "../../images/logo.png";
import styled from "styled-components";

const LogoWrapper = styled.div`
  margin-left: 40px;
  @media screen and (max-width: 480px) {
    margin: auto;
  }
`;

export default function Logo() {
  return (
    <LogoWrapper>
      <img src={Brand} alt="logo" />
    </LogoWrapper>
  );
}
