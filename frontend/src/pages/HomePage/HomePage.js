import NavBar from "../../components/NavBar/NavBar";
import Roles from "./Content/Roles";
import Players from "./Content/Player";
import Register from "./Content/Register";
import GamesMode from "./Content/GamesMode";
import Footer from "../../components/Footer/Footer";
import { Apresentation, CaroselBox, Content } from "./Content/Styles";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Content>
        <Apresentation>
          <h1>Quer aprender sobre Overwatch 2?</h1>
        </Apresentation>
        <Roles />
        <Players />
        <CaroselBox>
          <Register />
          <GamesMode />
        </CaroselBox>
      </Content>
      <Footer />
    </>
  );
}