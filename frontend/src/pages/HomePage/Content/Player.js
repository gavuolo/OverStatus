import styled from "styled-components";
import { NavInput } from "../../../components/Input/NavInput";
import { ContentBox, Description } from "./Styles";
import { IoSearchSharp } from "react-icons/io5";
import { theme } from "../../../assets/Colors";

export default function Players() {
  return (
    <>
      <ContentBox bgcolor={theme.primary} color={theme.white}>
        <Description>
          <h1>JOGADORES</h1>
          <div></div>
        </Description>
        <SearchBox>
          <NavInput placeholder={"Nome do jogaddor"} width={"100%"} />
          <IconSearch>
            <div></div>
            <IoSearchSharp />
          </IconSearch>
        </SearchBox>
      </ContentBox>
    </>
  );
}

const IconSearch = styled.div`
  width: 6%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  position: relative;

  &&:hover {
    transition: background-color 0.5s ease;
    border-radius: 10px;
    background-color: ${theme.primary};
    div:nth-child(1) {
      background-color: transparent;
      transition: background-color 0.1s ease;
    }
  }

  /* position: absolute;
  right: 0;
  left: 1520px;
  display: flex;
  align-items: center;
  font-size: 30px;
  color: black; */

  div:nth-child(1) {
    width: 6%;
    height: 70%;
    background-color: #d9d9d9;
    border-radius: 50px;
    margin: 0 1px 0 0;
  }
`;
const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 55%;
  height: auto;
  /* height: 45px; */
  /* background-color: #aeaeae; */
  background-color: #a7a7a7;
  background-color: red;
  border-radius: 10px;
`;
