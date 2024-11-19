import styled from "styled-components";
import { RoleIcon, RoleMapBox } from "./Styles";
import { useEffect, useState } from "react";
import React from "react";

import { useNavigate } from "react-router-dom";
import { theme } from "../../../assets/Colors";
import { getRoles, getSvg } from "../../../services/overFastApi/rolesService";
import { Loader } from "../../../components/Loader/ThreeDots";

import { ReactSVG } from "react-svg";

export default function RolesMap() {
  const [roles, setRoles] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  async function apiResponse() {
    try {
      const response = await getRoles();
      setRoles(response);
      setIsLoading(false);
    } catch (error) {
      setRoles(error);
      return;
    }
  }
  useEffect(() => {
    apiResponse();
  }, []);

  function selectRole(key) {
    navigate(`/role/${key}`);
  }
  return (
    <RoleMapBox>
      <Loader
        height={"70%"}
        width={"30%"}
        color={`${theme.white}`}
        visible={isLoading}
      />
      {!isLoading &&
        roles.map((item, index) => {
          return (
            <RoleIcon key={index} onClick={() => selectRole(item.key)}>
              <h2>{item.name}</h2>
              <ReactSVG src={item.icon} />
            </RoleIcon>
          );
        })}
    </RoleMapBox>
  );
}
