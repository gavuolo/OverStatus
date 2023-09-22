import React from "react";
import styled from "styled-components";

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
}) {
  return (
    <>
      <FormBox width={width}>
        <p>{text}</p>
        <InputBox
          placeholder={placeholder}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          readOnly={readOnly}
        />
      </FormBox>
    </>
  );
}
const FormBox = styled.div`
  /* padding: 15px 0 0; */
  margin: 10px 20px 10px 0px;
  width: ${(props) => props.width};
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
  width: auto;
  height: 38px;
  border-radius: 10px;
  border: none;
  padding: 4px 17px 0;
  font-size: 20px;
  background-color: rgba(217, 217, 217, 0.7);

  &&:focus {
    border: 0px solid;
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;
