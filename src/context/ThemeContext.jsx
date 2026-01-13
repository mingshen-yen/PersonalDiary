import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const lightTheme = { bg: "#ddd", text: "#000" };
  const darkTheme = { bg: "#000", text: "#ddd" };

  const [isLightTheme, setIsLightTheme] = useState(true);

  const toggle = () => {
    setIsLightTheme(!isLightTheme);
  };
  const activeTheme = isLightTheme ? lightTheme : darkTheme;

  return <ThemeContext.Provider value={{ activeTheme, toggle, isLightTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
