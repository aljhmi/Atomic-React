import React from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import styled from "styled-components";

const SearchWrapper = styled.div`
  margin: auto;
  @media screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

export default function Search() {
  return (
    <>
      <SearchWrapper>
        <Input placeholder="بحث.." />
        <Button title="بحث" />
      </SearchWrapper>
    </>
  );
}
