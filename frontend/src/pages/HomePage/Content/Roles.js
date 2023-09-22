import styled from "styled-components";
import { ContentBox, Description } from "./Styles";
import { useContext, useEffect, useState } from "react";
import React from "react";

import { ThreeDots } from "react-loader-spinner";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { theme } from "../../../assets/Colors";
import { getRoles } from "../../../services/overFastApi/rolesService";
import UserContext, { UserProvider } from "../../../context/useContext";

export default function Roles() {
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
  function RoleMap() {
    return (
      <>
        {roles ? (
          <>
            {roles.map((a, index) => {
              return (
                <RoleIcon key={index} onClick={() => selectRole(a.key)}>
                  <p>{a.name}</p>
                  <img src={a.icon} alt={a.name} />
                </RoleIcon>
              );
            })}{" "}
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
      </>
    );
  }
  return (
    <>
      <ContentBox bgcolor={theme.blue}>
        <Description>
          <h1>ROLES</h1>
          <div></div>
        </Description>
        <RoleMapBox>
          <RoleMap />
        </RoleMapBox>
      </ContentBox>
    </>
  );
}

const RoleIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 220px;
  width: 220px;
  cursor: pointer;
  p {
    margin-bottom: 20px;
    color: ${theme.black};
  }
  img {
    width: 40%;
  }
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
    z-index: 0;
    cursor: pointer;
  }
`;
const RoleMapBox = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  height: auto;
  justify-content: space-around;
`;
