import styled from "styled-components";
import { theme } from "../../../assets/Colors";

export const ContentBox = styled.div`
  width: 85vw;
  height: 250px;
  background-color: ${(props) => props.bgcolor};
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0 10px 0;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  h1 {
   
    color: ${(props) => props.color};
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  color: ${theme.black};
  div:nth-child(2) {
    width: 20%;
    height: 3px;
    background-color: ${theme.orange};
  }
`;
