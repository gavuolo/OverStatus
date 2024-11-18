import styled from "styled-components";
import { theme, fonts } from "../../../assets/Colors";

export const TopBox = styled.div`
  width: 85vw;
  margin-top: 80px;
  height: 150px;
  padding: 30px 0 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ButtonBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Content = styled.div`
  width: 85vw;
  height: auto;
  /* min-height: 60vh; */
  flex: 1;
  padding: 30px 0 30px 0;
  margin-bottom: 30px;
  background-color: ${theme.blue};
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
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
  /* transition: transform 0.2s; */
  transition: transform 0.1s;
  &:hover {
    transform: scale(1.15);
    cursor: pointer;
  }
`;
export const HeroCard = styled.div`
  background-color: ${theme.gray};
  outline: 1px solid ${theme.primary};
  width: 170px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
  overflow: hidden;
  &:hover{
    /* border: 1px solid ${theme.white}; */
    outline: 1px solid ${theme.gray};
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
  display: flex;
  align-items: center;
  justify-content: space-around;
  h2 {
    /* margin-right: 15px; */
    margin-left: 0.3rem;
    text-align: center;
    color: ${theme.black};
  }
`;

export const RoleIcon = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${theme.black};
  background-color: ${theme.primary};
  padding: 3%;
  border-radius: 50%;
  img {
    width: 20px;
    padding: 2px;
  }
`;

