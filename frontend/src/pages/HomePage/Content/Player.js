import styled from "styled-components";
import { NavInput } from "../../../components/Input/NavInput";
import { ContentBox, Description, IconSearch, PlayerBox, SearchBox, WarningBox } from "./Styles";
import { IoSearchSharp } from "react-icons/io5";
import { theme, fonts } from "../../../assets/Colors";
import { useState } from "react";
import useForm from "../../../hooks/useForm";

export default function Players() {
  const [isFocused, setIsFocused] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [playerId, setPlayerId] = useState({})
  return (
    <>
      <ContentBox $bgcolor={theme.primary} color={theme.white}>
        <Description>
          <h1>JOGADORES</h1>
          <div></div>
        </Description>
        <PlayerBox>
          <WarningBox>
            <h3>Procure um jogador usando seu nome de usuário.</h3>
            <h3>* Nomes de jogadores podem incluir caracteres especiais.</h3>
          </WarningBox>
          <SearchBox $isFocused={isFocused} $isSearchFocused={isSearchFocused}>
            <NavInput
              placeholder={"Nome do jogaddor"}
              width={"100%"}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onChange={setPlayerId}
            />
            <IconSearch
              onMouseEnter={() => setIsSearchFocused(true)}
              onMouseLeave={() => setIsSearchFocused(false)}
            >
              <IoSearchSharp />
            </IconSearch>
          </SearchBox>
        </PlayerBox>
      </ContentBox>
    </>
  );
}
