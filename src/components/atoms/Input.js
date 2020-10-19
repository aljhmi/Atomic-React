import React from "react";
import styled from "styled-components";

const InputStyle = styled.input`
  background: #f5d2d9;
  border: none;
  border-radius: 8px;
  height: 40px;
  width: 150px;
  margin-left: 5px;
  padding-right: 4px;
`;

export default function Input(props) {
  return (
    <>
      <InputStyle type="text" name="search" placeholder={props.placeholder} />
    </>
  );
}
