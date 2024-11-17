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

export function RolesMap() {
  const navigate = useNavigate();
  const { idRole } = useParams();
  const { rolesButton } = useContext(UserContext);
  function selectRole(key) {
    navigate(`/role/${key}`);
  }
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
