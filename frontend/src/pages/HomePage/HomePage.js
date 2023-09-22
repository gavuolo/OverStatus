import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";

export default function HomePage() {
  return (
    <>
      <NavBar />
      {/* <Content>
        <Roles/>
        <Players />
        <Footer />
      </Content> */}
    </>
  );
}

const Content = styled.div`
    margin-top: 110px;
`