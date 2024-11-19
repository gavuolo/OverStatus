import styled from "styled-components";
import { theme, fonts, rgbTheme } from "../../../assets/Colors";

export const TopBox = styled.div`
  width: 85vw;
  margin-top: 80px;
  height: 110px;
  padding: 30px 0 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ButtonBox = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.primary};
  border-radius: 2px;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
`;
// export const Content = styled.div`
//   width: 85vw;
//   height: auto;
//   /* min-height: 60vh; */
//   flex: 1;
//   padding: 10px 0 30px 0;
//   margin-bottom: 30px;
//   background-color: ${theme.blue};
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
//   -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
//   box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
// `;

export const Content = styled.div`
  width: 85vw;
  height: auto;
  /* min-height: 60vh; */
  flex: 1;
  padding: 10px 0 30px 0;
  margin-bottom: 30px;
  background-color: ${theme.blue};
  display: flex;
  flex-direction: column;
  align-items: center;
  /* -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45); */
  h3 {
    color: ${theme.black};
  }
`;
export const DescriptionBox = styled.div`
  width: 85%;
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 25px;
  text-align: center;
  color: ${theme.white};
  font-size: ${fonts.text};
`;
export const HeroesBox = styled.div`
  width: 85%;
  min-height: 50vh;
  /* height: auto; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;

  /* &&:last-child {
    flex-flow: initial;
  }  */
`;
export const HeroCardWrapper = styled.div`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.1s ease-in, transform 0.2s ease-in;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
  &&:hover {
    transform: scale(1.15);
    cursor: pointer;
    transition: transform 0.1s ease-in;
  }
`;
export const HeroCard = styled.div`
  background-color: ${theme.gray};
  outline: 2px solid ${theme.primary};
  width: 170px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
  overflow: hidden;

  &:hover {
    outline: 2px solid ${theme.white};
  }
`;
export const HeroImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.gray};
  overflow: hidden;
  img {
    max-width: 90%;
  }
`;
export const HeroName = styled.div`
  width: 60%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 20px;
    height: 20px;
    shape-rendering: geometricPrecision;

    path {
      fill: ${theme.black};
    }
  }
  h2 {
    /* margin-right: 15px; */
    margin-left: 0.5rem;
    text-align: center;
    color: ${theme.black};
  }
`;

export const AllHeroes = styled.div`
  width: 20%;
  height: 90%;
  border-radius: 2px;
  margin: 1%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10%;
  cursor: pointer;
  h1 {
    font-size: ${fonts.subtitle};
    color: ${theme.white};
  }
  &:hover {
    outline: 0.2rem solid ${theme.green};
    box-shadow: 0 0 0 3px ${theme.green};
    background-color: rgba(${rgbTheme.green}, 0.6);
  }
`;
