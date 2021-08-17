import React from "react";
import Homepage from "./pages/Homepage";
import RegisterEmployeePage from "./pages/RegisterEmployeePage";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isHomePage: false, isRegisterPage: true };
  }

  render() {
    return (
      <>
        {this.state.isHomePage && <Homepage />}

        {this.state.isRegisterPage && <RegisterEmployeePage />}
      </>
    );
  }
}

export default App;
