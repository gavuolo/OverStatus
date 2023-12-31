import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
import Roles from "./Content/Roles";
import overwatchimage from "../../assets/images/overwatchimage.png";
import Players from "./Content/Player";
import { motion } from "framer-motion";

import Register from "./Content/Register";
import GamesMode from "./Content/GamesMode";
import Footer from "../../components/Footer/Footer";

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

const Apresentation = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${overwatchimage});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top;
  h1 {
    font-size: 50px;
  }
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CaroselBox = styled.div`
  width: 85vw;
  height: 250px;
  display: flex;
  justify-content: space-between;
`;
