import styled from "styled-components";
import { NavInput } from "../../../components/Input/NavInput";
import { ContentBox, Description } from "./Styles";
import { IoSearchSharp } from "react-icons/io5";
import { theme } from "../../../assets/Colors";
import mododejogo from "../../../assets/images/mododejogo.png";
import { NavButton } from "../../../components/Button/NavButton";

export default function GamesMode() {
  return (
    <>
      <ItemBox>
        <Strip>
          <h1>Modos de jogo</h1>
        </Strip>
      </ItemBox>
    </>
  );
}

const ItemBox = styled.div`
  width: 45%;
  height: 100%;
  background-color: black;
  background-image: url(${mododejogo});
  display: flex;
  align-items: end;
  justify-content: center;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
`;
const Strip = styled.div`
  width: 100%;
  height: 40%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.white};
  flex-direction: column;
  gap: 20px;
`;
