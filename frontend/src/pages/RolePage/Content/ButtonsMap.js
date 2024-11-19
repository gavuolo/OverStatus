import { useLocation, useNavigate, useParams } from "react-router-dom";
import { RoleButton } from "../../../components/Button/RoleButton";
import { rgbTheme, theme } from "../../../assets/Colors";

export function ButtonsMap({ rolesButton }) {
  const navigate = useNavigate();
  const { idRole } = useParams();
  function selectRole(key) {
    navigate(`/role/${key}`);
  }
  return (
    <>
      {rolesButton &&
        rolesButton.map((a, index) => {
          return (
            <RoleButton
              key={index}
              text={`${a.name}`}
              width="20%"
              height="90%"
              bgcolor={a.key === idRole ? `${theme.green}` : `${theme.primary}`}
              color={a.key === idRole ? `${theme.primary}` : `${theme.white}`}
              hoverbgcolor={a.key === idRole ? `${rgbTheme.green}, 1` : `${rgbTheme.green}, 0.6`}
              fillsvg={a.key === idRole ? `${theme.primary}` : `${theme.white}`}
              src={a.icon}
              alt={a.name}
              onClick={() => selectRole(`${a.key}`)}
            />
          );
        })}
    </>
  );
}
