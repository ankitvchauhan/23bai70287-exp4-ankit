import { createContext, useReducer, useState, useEffect } from "react";
import appReducer from "../reducer/appReducer.js";

export const AppContext = createContext();

const initialState = {
  favorites: []
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        favorites: state.favorites,
        dispatch,
        theme,
        toggleTheme
      }}
    >
      {children}
    </AppContext.Provider>
  );
};