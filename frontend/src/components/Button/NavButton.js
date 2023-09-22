import React from "react";
import styled from "styled-components";
import { theme } from "../../assets/Colors";

export function NavButton({ text, onClick, type, disabled, height, width, bgcolor, color }) {
  return (
    <>
      <ButtonBox
        onClick={onClick}
        type={type}
        disabled={disabled}
        height={height}
        width={width}
        bgcolor={bgcolor}
        color={color}
      >
        <h1>{text}</h1>
      </ButtonBox>
    </>
  );
}

const ButtonBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 5px;
  
  background-color: ${(props) => props.bgcolor};
  color: ${theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  cursor: pointer;
  &&:hover {
    background-color: ${theme.gray};
    color: ${theme.black}
  }
  h1 {
    color: ${(props) => props.color};
    font-size: 20px;
  }

  @media (max-width: 950px) {
    width: auto;
    margin: 0 1vw 0 1vw;
    text-align: center;
    h1{
        width: 15vw;
      }
  }
`;
