import styled from "styled-components";
import { NavInput } from "../../../components/Input/NavInput";
import { ContentBox, Description } from "./Styles";
import { IoSearchSharp } from "react-icons/io5";
import { theme } from "../../../assets/Colors";
import { useState } from "react";

export default function Players() {
  const [isFocused, setIsFocused] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  return (
    <>
      <ContentBox bgcolor={theme.primary} color={theme.white}>
        <Description>
          <h1>JOGADORES</h1>
          <div></div>
        </Description>
        <SearchBox isFocused={isFocused} isSearchFocused={isSearchFocused}>
          <NavInput
            placeholder={"Nome do jogaddor"}
            width={"100%"}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <IconSearch
            isFocused={isFocused}
            onMouseEnter={() => setIsSearchFocused(true)}
            onMouseLeave={() => setIsSearchFocused(false)}
          >
            <IoSearchSharp />
          </IconSearch>
        </SearchBox>
      </ContentBox>
    </>
  );
}

const IconSearch = styled.div`
  width: 8%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 280%;
    color: ${theme.gray};
    cursor: pointer;
  }
  &&:hover {
    transition: background-color 0.4s ease;
    background-color: ${theme.orange};
    border-radius: 10px;
    svg {
      color: ${theme.black};
      transition: color 0.4s ease;
    }
  }
`;
const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 55%;
  height: auto;
  background-color: ${theme.input};
  border-radius: 10px;
  border: 2px solid
    ${({ isFocused, isSearchFocused }) =>
      isFocused || isSearchFocused ? theme.orange : "transparent"};
  transition: border-color 0.4s ease;
`;
