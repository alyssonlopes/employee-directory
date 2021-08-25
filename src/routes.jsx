import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmployeePage from "./pages/EmployeePage";
import Homepage from "./pages/Homepage";
import RegisterEmployeePage from "./pages/RegisterEmployeePage";

class Routes extends React.Component {
  render() {
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

          {/* render props*/}
          {/* <Route
            path="/employee"
            render={(props) => <EmployeePage {...props} />}
          /> */}

          {/* children props func */}
          {/* <Route path="/employee" children={(props) => <EmployeePage {...props}/>} /> */}

          {/* props.children */}
          {/* <Route path="/employee">
            <EmployeePage />
          </Route> */}

          {/* render props func */}
          {/* <Route path="/employee" render={() => <EmployeePage />} /> */}

          {/* component props func */}
          {/* <Route path="/employee" component={() => <EmployeePage />} /> */}

          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
