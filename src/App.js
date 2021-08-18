import React from "react";
import Homepage from "./pages/Homepage";
import RegisterEmployeePage from "./pages/RegisterEmployeePage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHomePage: true, isRegisterPage: false };
  }

  onChangePage = () => {
    this.setState({
      isHomePage: !this.state.isHomePage,
      isRegisterPage: !this.state.isRegisterPage,
    });
  };

  render() {
    return (
      <>
        {this.state.isHomePage && <Homepage onChangePage={this.onChangePage} />}

        {this.state.isRegisterPage && (
          <RegisterEmployeePage onChangePage={this.onChangePage} />
        )}
      </>
    );
  }
}

export default App;
