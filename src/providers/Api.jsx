import React from "react";
import { get, post } from "../api";

export const APIContext = React.createContext({});

export class APIProvider extends React.Component {
  render() {
    return (
      <APIContext.Provider value={{ api: { get, post } }}>
        {this.props.children}
      </APIContext.Provider>
    );
  }
}
