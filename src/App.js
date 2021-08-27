import React from "react";
import { EmployeeProvider } from "./providers/Employee";
import Routes from "./routes";

class App extends React.Component {
  render() {
    return (
      <EmployeeProvider>
        <Routes />
      </EmployeeProvider>
    );
  }
}

export default App;
