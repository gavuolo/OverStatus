import { createContext, useState } from "react";

const UserContext = createContext();
export default UserContext;

export function UserProvider({ children }) {
  // const [roles, setRoles] = useState(undefined);
  // const [rolesButton, setRolesButton] = useState(undefined);
  // const [heroes, setHeroes] = useState(undefined);
  // const [roleDescription, setRoleDescription] = useState(undefined);
  return (
    <UserContext.Provider value={{ 
     }}>
      {children}
    </UserContext.Provider>
  );
}
