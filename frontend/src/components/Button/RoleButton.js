import React, { useContext, useState } from "react";
import styled from "styled-components";
import { fonts, rgbTheme, theme } from "../../assets/Colors";
import axios from "axios";
import { ReactSVG } from "react-svg";
import UserContext from "../../context/useContext";

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
  hoverbgcolor,
  fillsvg
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
        hoverbgcolor={hoverbgcolor}
        fillsvg={fillsvg}
      >
        <ReactSVG src={src}/>
        <h1>{text}</h1>
      </ButtonBox>
    </>
  );
}

const ButtonBox = styled.div`
  /* width: 20%;
  height: 90%; */
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 3px;
  background-color: ${(props) => props.bgcolor};
  /* background: ${(props) => props.bg}; */
  margin: 1%;
  /* border: 5px solid black; */
  background-size: 0% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45); */
  gap: 10%;
  cursor: pointer;
  h1 {
    font-size: ${fonts.subtitle};
    color: ${(props) => props.color};
  }
  svg{
    width: 2rem;
    height: 2rem;
  path{
    fill: ${(props) => props.fillsvg};
  }}

  &:hover {
    outline: 0.15rem solid ${theme.green};
    box-shadow: 0 0 0 1px ${theme.green};
    background-color: rgba(${(props) => props.hoverbgcolor});

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
