import { createContext, useState } from "react";

const UserContext = createContext();
export default UserContext;

export function UserProvider({ children }) {
  // const [roles, setRoles] = useState(undefined);
  return (
    <UserContext.Provider value={{  }}>
      {children}
    </UserContext.Provider>
  );
}
