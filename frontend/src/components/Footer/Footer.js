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
          <FooterInfos>
            <FirstColumn>
              {/* <NavButton
                text={"Heróis"}
                width={"90%"}
                height={"20%"}
                color={theme.black}
                bgcolor={theme.blue}
                bgcolorhover={"transparent"}
                colorhover={theme.green}
              />
                <NavButton
                text={"Heróis"}
                width={"90%"}
                height={"10%"}
                color={theme.black}
                bgcolor={theme.blue}
                bgcolorhover={"transparent"}
                colorhover={theme.green}
              /> */}

            </FirstColumn>
            <SecondColumn>

            </SecondColumn>
            <ThirdColumn>

            </ThirdColumn>
            <MyInfo></MyInfo>
          </FooterInfos>
        </MenuFooter>
      </FooterBar>
    </>
  );
}
const FooterBar = styled.div`
  width: 100%;
  height: auto;
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
  width: 85vw;
  height: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;
const Typography = styled.p`
  font-size: 30px;
  color: ${theme.blue};
  font-family: "Terminator";
`;
const Line = styled.div`
  width: 60%;
  height: 3px;
  margin: 10px 0 10px 0;
  background-color: ${theme.gray};
`;
const FooterInfos = styled.div`
  width: 60%;
  height: auto;
  background-color: blueviolet;
  display: flex;
`;
const FirstColumn = styled.div`
  width: 25%;
  height: auto;
  background-color: red;
  display: flex;
  flex-direction: column;

`;
const SecondColumn = styled.div`
  width: 25%;
  height: auto;
  background-color: blue;
`;
const ThirdColumn = styled.div`
  width: 25%;
  height: auto;
  background-color: green;
`;
const MyInfo = styled.div`
  width: 25%;
  height: auto;
  background-color: beige;
`;
