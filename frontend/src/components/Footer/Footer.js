import styled from "styled-components";
import { Logo } from "../Logo/Logo";
import { NavButton } from "../Button/NavButton";
import { NavInput } from "../Input/NavInput";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { fonts, theme } from "../../assets/Colors";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <>
      <FooterBar>
        <MenuFooter>
          <Logo />
          <Line />
          <FooterInfos>
            <Column>
              <NavButton
                text={"Heróis"}
                width={"90%"}
                height={"20%"}
                color={theme.white}
                bgcolor={theme.primary}
                bgcolorhover={"transparent"}
                colorhover={theme.orange}
              />
              <NavButton
                text={"Mapas"}
                width={"90%"}
                height={"1%"}
                color={theme.white}
                bgcolor={theme.primary}
                bgcolorhover={"transparent"}
                colorhover={theme.orange}
              />
              <NavButton
                text={"Modos de Jogo"}
                width={"90%"}
                height={"1%"}
                color={theme.white}
                bgcolor={theme.primary}
                bgcolorhover={"transparent"}
                colorhover={theme.orange}
              />
            </Column>
            <Column>
              <NavButton
                text={"Guias"}
                width={"90%"}
                height={"1%"}
                color={theme.white}
                bgcolor={theme.primary}
                bgcolorhover={"transparent"}
                colorhover={theme.blue}
              />
              <NavButton
                text={"Streams"}
                width={"90%"}
                height={"1%"}
                color={theme.white}
                bgcolor={theme.primary}
                bgcolorhover={"transparent"}
                colorhover={theme.blue}
              />
              <NavButton
                text={"Notícias"}
                width={"90%"}
                height={"1%"}
                color={theme.white}
                bgcolor={theme.primary}
                bgcolorhover={"transparent"}
                colorhover={theme.blue}
              />
            </Column>
            <Column>
              <NavButton
                text={"Fale conosco"}
                width={"90%"}
                height={"1%"}
                color={theme.white}
                bgcolor={theme.primary}
                bgcolorhover={"transparent"}
                colorhover={theme.green}
              />
            </Column>
            <Column>
              <Typography>Criado por:</Typography>
              <Typography>Gavuolo</Typography>
              <SocialMedia>
                <SocialIcon
                  url="https://github.com/gavuolo"
                  fallback="Github"
                  aria-label="Github"
                  bgColor={theme.white}
                  fgColor={theme.black}
                  target="_blank"
                  rel="noopener noreferrer"
                />
                <SocialIcon
                  url="https://www.linkedin.com/in/gavuolo/"
                  fallback="Linkedin"
                  aria-label="Linkedin"
                  bgColor={theme.white}
                  fgColor={theme.black}
                  target="_blank"
                  rel="noopener noreferrer"
                />
                <SocialIcon
                  url="mailto:gabs.vuolo@gmail.com"
                  aria-label="Enviar E-mail"
                  fallback="E-mail"
                  bgColor={theme.white}
                  fgColor={theme.black}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </SocialMedia>
            </Column>
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
const Typography = styled.h2`
  font-size: ${fonts.butons};
  white-space: nowrap;
  color: ${theme.white};
  text-align: center;
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
  display: flex;
`;
const Column = styled.div`
  width: 25%;
  height: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: space-evenly;

  margin-top: 4%;
  svg {
    border-radius: 0 !important;
  }
  svg:hover {
    border: 3px solid ${theme.primary};
  }
`;

// const SecondColumn = styled.div`
//   width: 25%;
//   height: auto;
//   background-color: blue;
// `;
// const ThirdColumn = styled.div`
//   width: 25%;
//   height: auto;
//   background-color: green;
// `;
// const MyInfo = styled.div`
//   width: 25%;
//   height: auto;
//   background-color: beige;
// `;
