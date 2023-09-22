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