import {  ItemBox, Strip } from "./Styles";
import { theme } from "../../../assets/Colors";
import tracerimage from "../../../assets/images/tracerimage.png";

import { NavButton } from "../../../components/Button/NavButton";

export default function Register() {
  return (
    <>
      <ItemBox $url={tracerimage}>
        <Strip width={'100%'} height={'80%'}>
          <h1>Comente e ajude quem precisa</h1>
          <NavButton
            text="Registrar"
            width="auto"
            height="20%"
            $bgcolor={theme.orange}
            color={theme.black}
          />
        </Strip>
      </ItemBox>
    </>
  );
}

