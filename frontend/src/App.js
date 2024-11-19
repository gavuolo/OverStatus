import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/GlobalStyled";
import { UserProvider } from "./context/useContext";
import styled from "styled-components";
import { theme } from "./assets/Colors";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import RolePage from "./pages/RolePage/RolePage";
import HeroPage from "./pages/HeroPage/HeroPage";
import reportWebVitals from "./reportWebVitals";


function App() {
  return (
    <BrowserRouter>
      <Content>
        <GlobalStyle />
        <UserProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/role/:idRole" element={<RolePage />} />
            <Route path="/heroi/:keyHero" element={<HeroPage />} />
          </Routes>
        </UserProvider>
      </Content>
    </BrowserRouter>
  );
}

// reportWebVitals(console.log);
const Content = styled.div`
  /* width: 100vw; */
  /* height: 100vh; */
  background-color: ${theme.gray};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export default App;
