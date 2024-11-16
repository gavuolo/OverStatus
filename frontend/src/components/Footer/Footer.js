import styled from "styled-components";
import { Logo } from "../Logo/Logo";
import { NavButton } from "../Button/NavButton";
import { NavInput } from "../Input/NavInput";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { theme } from "../../assets/Colors";

export default function Footer() {
  return (
    <>
      <FooterBar>
        <MenuFooter>
        <Typography>overstatus</Typography>
        <Line />
        </MenuFooter>
      </FooterBar>
    </>
  );
}
const FooterBar = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${theme.primary};
  display: flex;
  justify-content: center;
  position: static;
  bottom: 100px;
  top: 0;

  @media (max-width: 950px) {
    padding: 0 1vw 0 60vw;
    height: 70px;
    overflow-x: auto;
    overflow-y: hidden;
  }
`;
const MenuFooter = styled.div`
  background-color: yellow;
  width: 85vw;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Typography = styled.p`
  font-size: 30px;
  color: ${theme.blue};
  font-family: "Terminator";
`;
const Line = styled.div`
width: 100%;
height: 100%;
background-color: red;
`
const FirstColumn = styled.div`
`