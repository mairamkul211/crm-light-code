import React from "react";
import styled from "styled-components";

const Button = ({ onClick, children, width, height, fontSize }) => {
  return (
    <StyledButton
      fontSize={fontSize}
      width={width}
      height={height}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: ${(props) => props.width || "190px"};
  height: ${(props) => props.height || "50px"};
  font-size: ${(props) => props.fontSize || "14px"};
  background-color: #0b345a;
  font-size: 15px;
  border: none;
  color: #e5e5e5;
  &:hover {
    color: white;
  }
  &:active {
    background-color: grey;
    color: white;
  }
`;

export default Button;
