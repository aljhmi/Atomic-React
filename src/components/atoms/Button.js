import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  background: #ce3052;
  border: none;
  color: white;
  border-radius: 8px;
  height: 40px;
  width: 50px;
  font-size: 16px;
  font-family: "Markazi Text", serif;
`;

export default function Button(props) {
  return (
    <>
      <ButtonStyle type="submit">{props.title}</ButtonStyle>
    </>
  );
}
