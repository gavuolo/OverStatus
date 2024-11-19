import React from "react";
import styled from "styled-components";
import { theme } from "../../assets/Colors";

export function NavInput({
  placeholder,
  type,
  name,
  onChange,
  value,
  text,
  width,
  required,
  readOnly,
  onBlur, 
  onFocus,
  $isFocused,
  valueForm
}) {
  return (
    <>
      <FormBox width={width}>
        <p>{text}</p>
        <InputBox
          placeholder={placeholder}
          type={type}
          name={name}
          valueForm={valueForm}
          onChange={onChange}
          required={required}
          readOnly={readOnly}
          onFocus={onFocus} 
          onBlur={onBlur}
          $isFocused={$isFocused}
        />
      </FormBox>
    </>
  );
}
const FormBox = styled.div`
  width: ${(props) => props.width};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  text-align: start;
  p {
    width: auto;
    text-align: start;
    font-size: 1rem;
    font-weight: 500;
  }
`;
const InputBox = styled.input`
  width: 100%;
  height: 38px;
  border-radius: 10px;
  border: none;
  padding: 4px 17px 0;
  font-size: 20px;
  background-color: ${theme.input};
  &&:focus {
    border: 0 solid;
    box-shadow: 0 0 0 0;
    outline: ${(props) => props.$isFocused ? '2px solid #FF9900' : '0'} ;
  }
`;
