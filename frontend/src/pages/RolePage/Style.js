import styled from "styled-components";
import { theme, fonts } from "../../assets/Colors";

export const TopBox = styled.div`
  width: 85vw;
  margin-top: 80px;
  height: 150px;
  padding: 30px 0 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    color: ${theme.white};
  }
`;
export const ButtonBox = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Content = styled.div`
  width: 85vw;
  height: auto;
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
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 25px;
  text-align: center;
  p {
    color: ${theme.white};
    font-size: ${fonts.subtitle};
  }
`;
export const HeroesBox = styled.div`
  width: 85%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;  
  /* &&:last-child {
    flex-flow: initial;
  }  */
`;
export const HeroCardWrapper = styled.div`
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;
export const HeroCard = styled.div`
  background-color: ${theme.gray};
  border-radius: 9px;
  border: 1px solid white;
  width: 170px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  
  margin: 10px;
`;
export const HeroImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    max-width: 85%;
  }
`;
export const HeroName = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  p {
    margin-right: 15px;
    text-align: center;
  }
`;
export const CentralizeDots = styled.div`
  width: 95vw;
  min-height: 36vh;
  margin-bottom: 20px;
  background-color: ${theme.blue};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const RoleIcon = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: black;
  padding: 3%;
  border-radius: 50%;
  margin-left: 15px;
  
  img {
    width: 20px;
    padding: 2px;
  }
`;

