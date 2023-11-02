import styled from "styled-components";
import { NavInput } from "../../../components/Input/NavInput";
import { ContentBox, Description } from "./Styles";
import { IoSearchSharp } from "react-icons/io5";
import { theme } from "../../../assets/Colors";
import tracerimage from "../../../assets/images/tracerimage.png";
import { NavButton } from "../../../components/Button/NavButton";

export default function Register() {
  return (
    <>
      <ItemBox>
        <Strip>
          <h1>Comente e ajuda quem precisa</h1>
          <NavButton
            text="Registrar"
            width="auto"
            height="20%"
            bgcolor={theme.orange}
            color={theme.black}
          />
        </Strip>
      </ItemBox>
    </>
  );
}

const ItemBox = styled.div`
  width: 45%;
  height: 100%;
  background-color: black;
  background-image: url(${tracerimage});
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
`;
const Strip = styled.div`
  width: 100%;
  height: 80%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.white};
  flex-direction: column;
  gap: 20px;
`;
