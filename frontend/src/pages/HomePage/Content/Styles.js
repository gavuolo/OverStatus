import styled from "styled-components";
import { theme, fonts } from "../../../assets/Colors";
import overwatchimage from "../../../assets/images/overwatchimage.png";
import tracerimage from "../../../assets/images/tracerimage.png";
export const ContentBox = styled.div`
  width: 85vw;
  height: 250px;
  /* height: 26vh; */
  background-color: ${(props) => props.$bgcolor};
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0 10px 0;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);

`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px; 
  color: ${theme.white};
  div:nth-child(2) {
    width: 19%;
    height: 3px;
    background-color: ${theme.orange};
  }
  h1 {
    color: ${(props) => props.color};
    font-size: ${fonts.title};
  }
`;
export const Apresentation = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible; 
  background-image: url(${overwatchimage});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top;
  margin-bottom: -50px;
  h1 {
    font-size: 50px;
  }
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CaroselBox = styled.div`
  width: 85vw;
  height: 250px;
  display: flex;
  justify-content: space-between;
`;
export const RoleMapBox = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  height: auto;
  justify-content: space-around;
  overflow: visible;
`;
export const RoleIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 220px;
  width: 220px;
  cursor: pointer;
  background-size: 0% 100%;
  h2 {
    margin-bottom: 20px;
    color: ${theme.white};
    padding: 1%;
  }
  svg {
    width: 6rem;
    height: 6rem;
    path {
      fill: ${theme.white};
    }
  }
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.14);
    z-index: 0;
    cursor: pointer;
    border: 2px solid ${theme.white};
    border-radius: 2px;
  }
`;

export const ItemBox = styled.div`
  width: 45%;
  height: 100%;
  background-color: black;
  background-image: url(${(props) => props.$url});
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
`;
export const Strip = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.white};
  flex-direction: column;
  gap: 20px;
`;

export const IconSearch = styled.div`
  /* width: 8%; */
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 240%;
    color: ${theme.gray};
    cursor: pointer;
  }
  &&:hover {
    transition: background-color 0.3s ease;
    background-color: ${theme.orange};
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    svg {
      color: ${theme.gray};
      transition: color 0.4s ease;
    }
  }
`;
export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  height: auto;
  background-color: ${theme.input};
  border-radius: 4px;
  border: 2px solid
    ${({ $isFocused, $isSearchFocused }) =>
      $isFocused || $isSearchFocused ? theme.orange : "transparent"};
  transition: border-color 0.4s ease;
`;
export const WarningBox = styled.div`
  width: 30%;
  height: auto;
  h3 {
    font-size: ${fonts.footnote};
    color: ${theme.white};
    margin-bottom: 1%;
  }
`;
export const PlayerBox = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
