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
} from "../Style";
import { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

import { RoleButton } from "../../../components/Button/RoleButton";
import { icons } from "react-icons/lib";
import UserContext from "../../../context/useContext";
import { theme } from "../../../assets/Colors";

export function HeroesMap() {
  const navigate = useNavigate();
  const { idRole } = useParams();
  const { rolesButton, heroes } = useContext(UserContext);
  function selectHero(key) {
    navigate(`/heroi/${key}`);
  }
  return (
    <>
      {heroes ? (
        <>
          {heroes.map((a, index) => {
            const icon = rolesButton.find((find) => find.key === a.role)?.icon;
            return (
              <HeroCardWrapper key={index} onClick={() => selectHero(a.key)}>
                <HeroCard>
                  <HeroImage>
                    <img src={a.portrait} alt={a.name} />
                  </HeroImage>
                  <HeroName>
                    <RoleIcon>
                      <img src={icon} alt={a.role} />
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
