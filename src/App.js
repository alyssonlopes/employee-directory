import React from "react";
import { EmployeeProvider } from "./providers/Employee";
import Routes from "./routes";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { APIProvider } from "./providers/Api";

const greenTheme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={greenTheme}>
      <APIProvider>
        <EmployeeProvider>
          <Routes />
        </EmployeeProvider>
      </APIProvider>
    </ThemeProvider>
  );
};

export default App;
