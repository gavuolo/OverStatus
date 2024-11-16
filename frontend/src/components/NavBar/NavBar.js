import styled from "styled-components";
import { Logo } from "../Logo/Logo";
import { NavButton } from "../Button/NavButton";
import { NavInput } from "../Input/NavInput";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { theme } from "../../assets/Colors";
import {} from "react-icons/io5";
import { useState } from "react";

export default function NavBar() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <TopBar>
        <CentralizeBar>
          <Logo />
          <ButtonBox>
            <NavButton
              text="MODO DE JOGO"
              width="auto"
              height="40%"
              bgcolor={theme.primary}
            />
            <NavButton
              text="HERÓIS"
              width="auto"
              height="40%"
              bgcolor={theme.primary}
            />
            <NavButton
              text="MAPAS"
              width="auto"
              height="40%"
              bgcolor={theme.primary}
            />
            <NavButton
              text="JOGADORES"
              width="auto"
              height="40%"
              bgcolor={theme.primary}
            />
            <NavButton
              text="GUIAS"
              width="auto"
              height="40%"
              bgcolor={theme.primary}
            />
          </ButtonBox>
          <NavInput
            placeholder={"BUSCA"}
            type={"text"}
            width={"auto"}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            isFocused={isFocused}
          />
          <LoginBox>
            <NavButton
              text={"LOGIN"}
              width={"90%"}
              height={"40%"}
              color={theme.black}
              bgcolor={theme.orange}
            />
          </LoginBox>
        </CentralizeBar>
      </TopBar>
    </>
  );
}
const TopBar = styled.div`
  width: 100vw;
  height: 80px;
  background-color: ${theme.primary};
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 2;
  -webkit-box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.75);
  @media (max-width: 950px) {
    padding: 0 1vw 0 60vw;
    height: 70px;
    overflow-x: auto;
    overflow-y: hidden;
  }
`;
const CentralizeBar = styled.div`
  width: 85vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ButtonBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2px;
  padding: 0 0.2em 0 0.2em;
`;
const LoginBox = styled.div`
  width: 120px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
