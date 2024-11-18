import { CentralizeDots } from "./Styles";
import { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { RoleButton } from "../../../components/Button/RoleButton";
import { icons } from "react-icons/lib";
import UserContext from "../../../context/useContext";
import { theme } from "../../../assets/Colors";
import { Loader } from "../../../components/Loader/ThreeDots";
import { getRoles } from "../../../services/overFastApi/rolesService";

export function ButtonsMap({ rolesButton }) {
  const navigate = useNavigate();
  const { idRole } = useParams();
  function selectRole(key) {
    navigate(`/role/${key}`);
  }
  return (
    <>
      {rolesButton &&
        rolesButton.map((a, index) => {
          return (
            <RoleButton
              key={index}
              text={`${a.name}`}
              width="20%"
              height="90%"
              bgcolor={a.key === idRole ? `${theme.green}` : `${theme.primary}`}
              src={a.icon}
              alt={a.name}
              onClick={() => selectRole(`${a.key}`)}
            />
          );
        })}
    </>
  );
}