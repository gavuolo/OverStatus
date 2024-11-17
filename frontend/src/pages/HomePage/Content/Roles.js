import styled from "styled-components";
import { ContentBox, Description } from "./Styles";
import { useContext, useEffect, useState } from "react";
import React from "react";

import { ThreeDots } from "react-loader-spinner";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { theme } from "../../../assets/Colors";
import { getRoles } from "../../../services/overFastApi/rolesService";
import UserContext, { UserProvider } from "../../../context/useContext";
import RolesMap from "./RolesMap";

export default function Roles() {
  return (
    <>
      <ContentBox bgcolor={theme.blue}>
        <Description>
          <h1>FUNÇÕES</h1>
          <div></div>
        </Description>
          <RolesMap />
      </ContentBox>
    </>
  );
}

