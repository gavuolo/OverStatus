import NavBar from "../../components/NavBar/NavBar";
import {
  HeroesBox,
  TopBox,
  DescriptionBox,
  Content,
  ButtonBox,
  AllHeroes,
} from "./Content/Styles";
import { getHeroes } from "../../services/overFastApi/heroesService";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getRoles } from "../../services/overFastApi/rolesService";
import Footer from "../../components/Footer/Footer";
import { ButtonsMap } from "./Content/ButtonsMap";
import { HeroesMap } from "./Content/HeroesMap";
import { Loader } from "../../components/Loader/ThreeDots";
import { theme } from "../../assets/Colors";

export default function RolePage() {
  const [rolesButton, setRolesButton] = useState(undefined);
  const [heroes, setHeroes] = useState([]);
  const [roleDescription, setRoleDescription] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const { idRole } = useParams();

  async function apiResponse() {
    try {
      const response = await getHeroes(idRole);
      const roleResponse = await getRoles();

      const description = roleResponse.find(
        (item) => item.key === idRole
      )?.description;
      setRolesButton(roleResponse);
      setRoleDescription(description);
      setHeroes(response);
      setIsLoading(false);
    } catch (error) {
      setHeroes(error);
      return;
    }
  }
  useEffect(() => {
    apiResponse();
    setIsLoading(true);
  }, [location.key]);
  return (
    <>
      <NavBar />
      <TopBox>
        <ButtonBox>
          <ButtonsMap rolesButton={rolesButton} />
          <AllHeroes>
            <h1>Todos</h1>
          </AllHeroes>
        </ButtonBox>
      </TopBox>
      <Content>
        <DescriptionBox>
          {!isLoading && <h3>{roleDescription}</h3>}
        </DescriptionBox>
        <HeroesBox>
          <Loader color={theme.gray} visible={isLoading} />
          <HeroesMap
            heroes={heroes}
            rolesButton={rolesButton}
            isLoading={isLoading}
          />
        </HeroesBox>
      </Content>
      <Footer />
    </>
  );
}
