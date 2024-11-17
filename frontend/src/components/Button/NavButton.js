import React from "react";
import styled from "styled-components";
import { theme, fonts } from "../../assets/Colors";

export function NavButton({
  text,
  onClick,
  type,
  disabled,
  height,
  width,
  bgcolor,
  color,
  bgcolorhover,
  colorhover
}) {
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
        bgcolorhover={bgcolorhover}
        colorhover={colorhover}
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
  overflow: hidden;
  h1 {
    color: ${(props) => props.color};
    font-size: ${fonts.butons};
    text-align: center;
    white-space: nowrap; //nao vai quebrar em outras linhas
  }
  &&:hover {
    background-color: ${(props) => props.bgcolorhover ? `${props.bgcolorhover}` : `${theme.gray}`};
    color: ${theme.black};
    h1{
      color: ${(props) => props.colorhover ? `${props.colorhover}` : `${theme.black}`};
    }
  }


  @media (max-width: 950px) {
    width: auto;
    margin: 0 1vw 0 1vw;
    text-align: center;
    h1 {
      width: 15vw;
    }
  }
`;
