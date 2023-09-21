import { createContext, useReducer } from "react";

import AppReducer from "./appReducer";

const INITIAL_STATE = {
  isLoggedIn: false,
};

export const AppContext = createContext(INITIAL_STATE);

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

  function login() {
    dispatch({ type: "LOGGED" });
  }

  function logOut() {
    dispatch({ type: "LOGOUT" });
  }

  return (
    <AppContext.Provider value={{ ...state, login, logOut }}>
      {children}
    </AppContext.Provider>
  );
};
