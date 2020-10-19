import React from "react";
import styled from "styled-components";

const Li = styled.li.attrs((props) => ({
  className: props.className
}))`
  display: inline-block;
  margin-left: 20px;
  color: #6d6d6d;
  text-align: right;
  cursor: pointer;
  &:hover {
    color: #ce3052;
  }
  &:last-child {
    margin: 0;
  }
`;

export default function MenuLink(props) {
  return (
    <>
      <Li className={props.className}>{props.children}</Li>
    </>
  );
}
