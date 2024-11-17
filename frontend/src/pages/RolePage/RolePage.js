import NavBar from "../../components/NavBar/NavBar";
import {
  HeroCard,
  HeroImage,
  HeroName,
  HeroesBox,
  TopBox,
  HeroCardWrapper,
  CentralizeDots,
  Content,
  RoleIcon,
  DescriptionBox,
  ButtonBox,
} from "./Style";
import { getHeroes } from "../../services/overFastApi/heroesService";
import { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { getRoles } from "../../services/overFastApi/rolesService";
import Footer from "../../components/Footer/Footer";
import { NavButton } from "../../components/Button/NavButton";
import { theme } from "../../assets/Colors";
import { RoleButton } from "../../components/Button/RoleButton";
import UserContext from "../../context/useContext";
import { icons } from "react-icons/lib";

export default function RolePage() {
  const [heroes, setHeroes] = useState(undefined);
  // const { roles, setRoles } = useContext(UserContext)
  const [roleDescription, setRoleDescription] = useState(undefined);
  const [rolesButton, setRolesButton] = useState(undefined);
  const navigate = useNavigate();
  const location = useLocation();
  const { idRole } = useParams();
  async function apiResponse() {
    try {
      const response = await getHeroes(idRole);
      const roleResponse = await getRoles();
      const description = roleResponse.find((a) => a.key === idRole)?.description;
      setRolesButton(roleResponse);
      setRoleDescription(description);
      setHeroes(response);
    } catch (error) {
      setHeroes(error);
      return;
    }
  }
  useEffect(() => {
    apiResponse();
  }, [location.key]);
  function selectHero(key) {
    navigate(`/heroi/${key}`);
  }
  function selectRole(key) {
    navigate(`/role/${key}`);
  }
  function HeroesMap() {
    return (
      <>
        {heroes ? (
          <>
            {heroes.map((a, index) => {
              const icon = rolesButton.find(
                (find) => find.key === a.role
              )?.icon;
              return (
                <HeroCardWrapper key={index} onClick={() => selectHero(a.key)}>
                  <HeroCard>
                    <HeroImage>
                      <img src={a.portrait} alt={a.name}/>
                    </HeroImage>
                    <HeroName>
                      <RoleIcon>
                        <img src={icon} alt={a.role}/>
                      </RoleIcon>
                      <p>{a.name}</p>
                    </HeroName>
                  </HeroCard>
                </HeroCardWrapper>
              );
            })}
          </>
        ) : (
          <>
            <CentralizeDots>
              <ThreeDots
                height="60"
                width="60"
                radius="5"
                color={theme.gray}
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            </CentralizeDots>
          </>
        )}
      </>
    );
  }
  function RolesMap() {
    return (
      <>
        {rolesButton ? (
          <>
            {rolesButton.map((a, index) => {
              return (
                <RoleButton
                  key={index}
                  text={`${a.name}`}
                  width="10%"
                  height="50%"
                  bgcolor={
                    a.key === idRole ? `${theme.green}` : `${theme.primary}`
                  }
                  src={a.icon}
                  alt={a.name}
                  onClick={() => selectRole(`${a.key}`)}
                />
              );
            })}
          </>
        ) : (
          <>
            <CentralizeDots>
              <ThreeDots
                height="60"
                width="60"
                radius="5"
                color={theme.gray}
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            </CentralizeDots>
          </>
        )}
      </>
    );
  }
  return (
    <>
      <NavBar />
      <TopBox>
        <ButtonBox>
          <RolesMap />
        </ButtonBox>
      </TopBox>
      <Content>
        <DescriptionBox>
          <p>{roleDescription}</p>
        </DescriptionBox>
        <HeroesBox>
          <HeroesMap />
        </HeroesBox>
      </Content>
      <Footer />
    </>
  );
}
