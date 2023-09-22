import styled from "styled-components";
import { Logo } from "../Logo/Logo";
import { NavButton } from "../Button/NavButton";
import { NavInput } from "../Input/NavInput";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { theme } from "../../assets/Colors";

export default function NavBar() {
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
              bgcolor={theme.gray}
            />
            <NavButton
              text="HERÓIS"
              width="auto"
              height="40%"
              bgcolor={theme.gray}
            />
            <NavButton
              text="MAPAS"
              width="auto"
              height="40%"
              bgcolor={theme.gray}
            />
            <NavButton
              text="JOGADORES"
              width="auto"
              height="40%"
              bgcolor={theme.gray}
            />
            <NavButton
              text="GUIAS"
              width="auto"
              height="40%"
              bgcolor={theme.gray}
            />
          </ButtonBox>
          <NavInput />
          <LoginBox>
            <NavButton
              text="LOGIN"
              width="90%"
              height="40%"
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

  /* position: fixed;
  top: 20px;
  bottom: 0;
  width: 95vw;
  height: 70px;
  background-color: ${theme.white};
  z-index: 1;
  -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.45);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around; */

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
  justify-content: space-around;
`;
const ButtonBox = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const LoginBox = styled.div`
  width: 120px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
