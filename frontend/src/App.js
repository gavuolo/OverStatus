import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/GlobalStyled";
import { UserProvider } from "./context/useContext";
import styled from "styled-components";
import { theme } from "./assets/Colors";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
    <Content>
      <GlobalStyle />
      <UserProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/role/:idRole" element={<RolePage />} />
          <Route path="/heroi/:keyHero" element={<HeroPage />} /> */}
        </Routes>
      </UserProvider>
      </Content>
    </BrowserRouter>
  );
}
const Content = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.gray};
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;
export default App;
