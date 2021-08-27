import React from "react";
import { EmployeeProvider } from "./providers/Employee";
import Routes from "./routes";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

const orangeTheme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={orangeTheme}>
        <EmployeeProvider>
          <Routes />
        </EmployeeProvider>
      </ThemeProvider>
    );
  }
}

export default App;
