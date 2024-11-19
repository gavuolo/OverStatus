import { ContentBox, Description } from "./Styles";
import React from "react";
import { theme } from "../../../assets/Colors";
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

