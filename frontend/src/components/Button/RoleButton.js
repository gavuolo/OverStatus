import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../assets/Colors";
import axios from "axios";

export function RoleButton({
  text,
  onClick,
  type,
  disabled,
  height,
  width,
  bgcolor,
  color,
  src,
  alt,
  bg,
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
        bg={bg}
      >
        {src && <img src={src} alt={alt} />}
        <h2>{text}</h2>
      </ButtonBox>
    </>
  );
}

const ButtonBox = styled.div`
  /* width: 20%;
  height: 90%; */
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 5px;
  background-color: ${(props) => props.bgcolor};
  background: ${(props) => props.bg};
  /* border: 5px solid ${(props) => props.bgcolor}; */
  background-size: 0% 100%;
  display: flex;
  color: ${theme.white};
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  gap: 10%;
  cursor: pointer;
  h2 {
    color: ${(props) => props.color};
  }
  img {
    width: 25px;
    height: 25px;
  }
  transition: background-color 0.5s ease;

  &:hover {
    outline: 0.2rem solid ${theme.green};
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
