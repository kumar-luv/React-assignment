import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";
const AuthContext = createContext({});
const AuthProvider = (props) => {
  const [user, setUser] = useState({
    id: null,
    name: null,
    title: null,
    address: null,
  });
  const authContextValue = {
    user,
    setUser,
  };
  return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
