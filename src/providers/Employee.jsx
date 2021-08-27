import React from "react";

const EmployeeContext = React.createContext({});

class EmployeeProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: null,
    };
  }

  setEmployee(employee) {
    this.setState({ employee });
  }

  render() {
    const value = {
      ...this.state,
      setEmployee: this.setEmployee.bind(this),
    };
    return (
      <EmployeeContext.Provider value={value}>
        {this.props.children}
      </EmployeeContext.Provider>
    );
  }
}

export { EmployeeContext, EmployeeProvider };
