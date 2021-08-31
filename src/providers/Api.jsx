import React from "react";
import { get, post } from "../api";

export const APIContext = React.createContext({});

export const APIProvider = ({ children }) => {
  return (
    <APIContext.Provider value={{ api: { get, post } }}>
      {children}
    </APIContext.Provider>
  );
};
