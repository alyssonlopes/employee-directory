import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmployeePage from "./pages/EmployeePage";
import Homepage from "./pages/Homepage";
import RegisterEmployeePage from "./pages/RegisterEmployeePage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>

        <Route path="/register">
          <RegisterEmployeePage />
        </Route>

        {/* component props */}
        <Route path="/employee" component={EmployeePage} exact />

        <Route path="/employee/:id" component={EmployeePage} />

        <Route>404 Not Found</Route>
      </Switch>
    </Router>
  );
};

export default Routes;
