import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getHero } from "../../services/overFastApi/heroesService";
import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Summary from "./Content/Summary";

export default function HeroPage() {
  const { keyHero } = useParams();
  const [hero, setHero] = useState(undefined);
  const [story, setStory] = useState(undefined);
  const [abilities, setAbilities] = useState(undefined);

  async function apiResponse() {
    try {
      const response = await getHero(keyHero);
      setStory(response.story);
      setAbilities(response.abilities);
      setHero(response);
    } catch (error) {
      console.log(error);
      return;
    }
  }
  useEffect(() => {
    apiResponse();
  }, []);
  return (
    <>
      <NavBar />
      <Content>
        {hero ? (
          <>
            <BackGround>
              <HeroImageBackGround
                src={hero.abilities[0].video.thumbnail}
                alt={hero.name}
              />
            </BackGround>
            {/* <Summary hero={hero} /> */}
            {/* <Skills abilities={abilities}/> */}
          </>
        ) : (
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
        )}
      </Content>
    </>
  );
}

const Content = styled.div`
  margin-top: 80px;
`;
const BackGround = styled.div`
  width: 100vw;
  height: 200px;  
  overflow: hidden;
  /* img{  
    max-width: 100%;
    max-height: auto;
    opacity: 0.5;
    object-fit: cover;
  } */
`;
const HeroImageBackGround = styled.img`
  opacity: 0.5;
  object-fit: cover; 
  overflow: visible;
`;
// const Apresentation = styled.div`
//   width: 100%;
//   height: 300px;
//   margin-top: 80px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-image: url(${hero.portrait});
//   background-repeat: no-repeat;
//   background-attachment: fixed;
//   background-position: top;
//   h1 {
//     font-size: 50px;
//   }
// `;
