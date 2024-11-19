import { useEffect, useState } from "react";
import { HeroCard, HeroImage, HeroName, HeroCardWrapper } from "./Styles";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ReactSVG } from "react-svg";

export function HeroesMap({ heroes, rolesButton, isLoading }) {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { idRole } = useParams();

  useEffect(() => {
    if (!isLoading) {
      setIsVisible(true);
      return;
    }
    setIsVisible(false);
  }, [isLoading]);

  function selectHero(key) {
    navigate(`/heroi/${key}`);
  }
  
  return (
    <>
      {!isLoading &&
        heroes.map((item, index) => {
          const icon = rolesButton.find((find) => find.key === item.role)?.icon;
          return (
            <HeroCardWrapper
              key={index}
              onClick={() => selectHero(item.key)}
              className={isVisible ? "visible" : ""}
            >
              <HeroCard>
                <HeroImage>
                  <img src={item.portrait} alt={item.name} />
                </HeroImage>
                <HeroName>
                  <ReactSVG src={icon} />

                  <h2>{item.name}</h2>
                </HeroName>
              </HeroCard>
            </HeroCardWrapper>
          );
        })}
    </>
  );
}
