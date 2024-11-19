import { ItemBox, Strip } from "./Styles";
import mododejogo from "../../../assets/images/mododejogo.png";
export default function GamesMode() {
  return (
    <>
      <ItemBox url={mododejogo}>
        <Strip width={'100%'} height={'40%'}>
          <h1>Modos de jogo</h1>
        </Strip>
      </ItemBox>
    </>
  );
}