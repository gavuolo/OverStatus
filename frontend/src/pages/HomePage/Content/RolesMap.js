import styled from "styled-components";
import { ContentBox, Description } from "./Styles";
import { useContext, useEffect, useState } from "react";
import React from "react";

import { ThreeDots } from "react-loader-spinner";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { theme } from "../../../assets/Colors";
import { getRoles } from "../../../services/overFastApi/rolesService";
import UserContext, { UserProvider } from "../../../context/useContext";

export default function RolesMap() {
  const [roles, setRoles] = useState(undefined);
  // const { roles, setRoles } = useContext(UserContext)
  const navigate = useNavigate();
  async function apiResponse() {
    try {
      const response = await getRoles();
      setRoles(response);
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
      {roles ? (
        <>
          {roles.map((a, index) => {
            return (
              <RoleIcon key={index} onClick={() => selectRole(a.key)}>
                <h2>{a.name}</h2>
                <img src={a.icon} alt={a.name} />
              </RoleIcon>
            );
          })}
        </>
      ) : (
        <>
          <ThreeDots
            height="70%"
            width="30%"
            radius="9"
            color="#EEEEEE"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </>
      )}
    </RoleMapBox>
  );
}

const RoleMapBox = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  height: auto;
  justify-content: space-around;
`;

const RoleIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 220px;
  width: 220px;
  cursor: pointer;
  h2 {
    margin-bottom: 20px;
    color: ${theme.white};
    padding: 1%;
    background-size: 0% 100%; 
  }
  img {
    width: 40%;
  }
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
    z-index: 0;
    cursor: pointer;
    h2 {   
    background: linear-gradient(to right, ${theme.green} 0%, ${theme.green} 100%);
    background-repeat: no-repeat;
    background-size: 100% 100%; 
    transition: background-size 0.4s ease, color 0.4s ease; 
    }
  }
`;
