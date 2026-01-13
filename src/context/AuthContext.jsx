import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({
    name: "Guest",
    isAuthenticated: "false",
  });

  const login = (username) => {
    setUser({ name: username, isAuthenticated: true });
  };

  const logout = () => {
    setUser({ name: "Guest", isAuthenticated: false });
  };

  return <AuthContext.Provider value={{ login, logout, user }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
