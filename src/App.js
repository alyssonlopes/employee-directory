import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import RegisterEmployeePage from "./pages/RegisterEmployeePage";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/register">
            <RegisterEmployeePage />
          </Route>
          <Route path="/details/:id">
            <RegisterEmployeePage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
