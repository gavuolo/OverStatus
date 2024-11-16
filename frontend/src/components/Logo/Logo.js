import styled from "styled-components";
import { Link, Navigate, useNavigate , useParams } from "react-router-dom";
import { theme } from "../../assets/Colors";


export function Logo() {
  const navigate = useNavigate();
  function homePageNavigate(){
    navigate('/');
    window.scrollTo(0, 0);
  }
  return (
    <>
      <LogoBox onClick={homePageNavigate}>
        <Typography>overstatus</Typography>
      </LogoBox>
    </>
  );
}

const LogoBox = styled.div`
  width: auto;
  height: 60%;
  display: flex;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  /* background-color: green; */
`;
const Typography = styled.p`
  font-size: 30px;
  color: ${theme.blue};
  font-family: "Terminator";
`;