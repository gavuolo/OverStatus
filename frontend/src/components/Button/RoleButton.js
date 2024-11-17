import React from "react";
import styled from "styled-components";
import { theme } from "../../assets/Colors";

export function RoleButton({ text, onClick, type, disabled, height, width, bgcolor, color, src, alt }) {
  console.log(bgcolor)
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
        <img src={src} alt={alt} />
        <h1>{text}</h1>
      </ButtonBox>
    </>
  );
}

const ButtonBox = styled.div`
  width: 20%;
  height: 90%;
  border-radius: 5px;
  background-color: ${(props) => props.bgcolor ? `${theme.green}` : `${theme.primary}`};
  display: flex;
  color: ${theme.white};
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  gap: 10%;
  cursor: pointer;
  &&:hover {
    background-color: ${theme.green};
  }
  h1 {
    color: ${(props) => props.color};
    font-size: 20px;
  }
  img{
    width: 20px;
    height: 20px
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