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
import { Link, Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { getRoles } from "../../services/overFastApi/rolesService";
import Footer from "../../components/Footer/Footer";
import { NavButton } from "../../components/Button/NavButton";
import { theme } from "../../assets/Colors";
import { RoleButton } from "../../components/Button/RoleButton";
import UserContext from "../../context/useContext";

export default function RolePage() {
  const [heroes, setHeroes] = useState(undefined);
  // const { roles, setRoles } = useContext(UserContext)
  const [roles, setRoles] = useState([
    {
      name: "Tanque",
      icon: "https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt0f8b4fa502f0ea53/62ea8957ed429710b3d9b0b0/Tank.svg",
    },
    {
      name: "Dano",
      icon: "https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/bltc1d840ba007f88a8/62ea89572fdd1011027e605d/Damage.svg",
    },
    {
      name: "Suporte",
      icon: "https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt66cec9a29cd34e3d/62ea8957c87999116c02c674/Support.svg",
    },
  ]);
  const [roleName, setRoleName] = useState(undefined);
  const [roleDescription, setRoleDescription] = useState(undefined);
  const [icon, setIcon] = useState(undefined);
  const navigate = useNavigate();
  const location = useLocation();
  const { idRole } = useParams();
  async function apiResponse() {
    try {
      const response = await getHeroes(idRole);
      const roleResponse = await getRoles();
      const filterRole = roleResponse.filter((a) => a.key === idRole);
      setIcon(filterRole[0].icon);
      setRoleName(filterRole[0].name);
      setRoleDescription(filterRole[0].description);
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
              return (
                <HeroCardWrapper key={index} onClick={() => selectHero(a.key)}>
                  <HeroCard>
                    <HeroImage>
                      <img src={a.portrait} />
                    </HeroImage>
                    <HeroName>
                      <RoleIcon>
                        <img src={icon} />
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

  return (
    <>
      <NavBar />
      <TopBox>
        <ButtonBox>
          <RoleButton
            text="Tanque"
            width="10%"
            height="50%"
            bgcolor={roleName === "Tanque"}
            src={roles[0].icon}
            alt={roles[0].name}
            onClick={() => selectRole('tank')}
          />
          <RoleButton
            text="Dano"
            width="10%"
            height="50%"
            bgcolor={roleName === "Dano"}
            src={roles[1].icon}
            alt={roles[1].name}
            onClick={() => selectRole('damage')}
          />
          <RoleButton
            text="Suporte"
            width="10%"
            height="50%"
            bgcolor={roleName === "Suporte"}
            src={roles[2].icon}
            alt={roles[2].name}
            onClick={() => selectRole('support')}
          />
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
