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
import { RolesMap } from "./Content/RolesMap";
import { HeroesMap } from "./Content/HeroesMap";

export default function RolePage() {
  const { setRolesButton, setHeroes, roleDescription, setRoleDescription } =
    useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { idRole } = useParams();
  async function apiResponse() {
    try {
      const response = await getHeroes(idRole);
      const roleResponse = await getRoles();
      const description = roleResponse.find(
        (a) => a.key === idRole
      )?.description;
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
          <h3>{roleDescription}</h3>
        </DescriptionBox>
        <HeroesBox>
          <HeroesMap />
        </HeroesBox>
      </Content>
      <Footer />
    </>
  );
}
