import styled from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { IoLocationSharp } from "react-icons/io5";
import { hitpoints } from "../../../assets/Colors";

export default function Summary({ hero }) {
  const { keyHero } = useParams();
  return (
    <>
      <ContentBox bgcolor="#337fff" height="400px">
        <ItemBox>
          <Portrait>
            <h1>{hero.name}</h1>
            <img src={hero.portrait} alt={hero.name} />
          </Portrait>
          <HitPoints>
            <div>
              <h1>Armadura:</h1>
              <h2>{hero.hitpoints.armor}</h2>
            </div>

            <div>
            <h1>Vida:</h1>
            <h1>{hero.hitpoints.health}</h1>
            </div>

            <div>
            <h1>Escudo:</h1>
            <h1>{hero.hitpoints.shields}</h1>
            </div>

            <div>
            <h1>Total: </h1>
            <h1>{hero.hitpoints.total}</h1>
            </div>

          
          </HitPoints>
          <Description>
            <p>{hero.description}</p>
            <IoLocationSharp />
            <p>Localização: {hero.location}</p>
          </Description>
        </ItemBox>
      </ContentBox>
    </>
  );
}

const Portrait = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    position: absolute;
    border-bottom: 1px solid #f99e1a;
    top: 140px;
    font-size: 40px;
  }
  img {
    max-width: 85%;
  }
`;
const HitPoints = styled.div`
  width: 20%;
  height: 100%;
  line-height: normal;
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: center;
  justify-content: center;
  background-color: red;
  div:nth-child(1) {
    width: 100px;
    margin-bottom: 5px;
    border-bottom: 20px solid ${hitpoints.armor};
  }
  div:nth-child(2) {
    width: 100px;
    margin-bottom: 5px;
    border-bottom: 20px solid ${hitpoints.health};
  }
  div:nth-child(3) {
    width: 100px;
    border-bottom: 20px solid ${hitpoints.shields};
  }
  div:nth-child(4) {
    width: 100px;
    margin-top: 10px;
  }
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: 100%;
  width: 200px;
`;
const ItemBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const ContentBox = styled.div`
  width: 95vw;
  height: ${(props) => props.height};
  padding-bottom: 30px;
  margin-bottom: 20px;
  background-color: ${(props) => props.bgcolor};
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  padding: 30px 0 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    color: white;
  }
`;
