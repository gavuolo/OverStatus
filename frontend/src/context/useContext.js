import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const UserContext = createContext();
export default UserContext;

export function UserProvider({ children }) {
  // const [storage, setStorage] = useLocalStorage('value', {})
  return (
    <UserContext.Provider value={{ 
     }}>
      {children}
    </UserContext.Provider>
  );
}
