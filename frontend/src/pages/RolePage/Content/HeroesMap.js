import {
  HeroCard,
  HeroImage,
  HeroName,
  HeroCardWrapper,
  CentralizeDots,
  RoleIcon,
  Content,
  DescriptionBox,
  HeroesBox,
} from "./Styles";
import { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import UserContext from "../../../context/useContext";
import { theme } from "../../../assets/Colors";
import { Loader } from "../../../components/Loader/ThreeDots";
import { getHeroes } from "../../../services/overFastApi/heroesService";
import { getRoles } from "../../../services/overFastApi/rolesService";

export function HeroesMap({
  heroes,
  rolesButton,
  isLoading
}) {
  const navigate = useNavigate();
  const { idRole } = useParams();
  function selectHero(key) {
    navigate(`/heroi/${key}`);
  }
  return (
    <>
      {!isLoading &&
        heroes.map((item, index) => {
          const icon = rolesButton.find((find) => find.key === item.role)?.icon;
          return (
            <HeroCardWrapper key={index} onClick={() => selectHero(item.key)}>
              <HeroCard>
                <HeroImage>
                  <img src={item.portrait} alt={item.name} />
                </HeroImage>
                <HeroName>
                  <RoleIcon>
                    <img src={icon} alt={item.role} />
                  </RoleIcon>
                  <h2>{item.name}</h2>
                </HeroName>
              </HeroCard>
            </HeroCardWrapper>
          );
        })}
    </>
  );
}
