import React, { Component } from "react";
import EmployeeListItem from "../../components/EmployeeListItem";
import Header from "../../components/Header";
import { EmployeeContext } from "../../providers/Employee";

class InnerEmployeePage extends Component {
  render() {
    const { employee } = this.props;

    return (
      <>
        <Header title={"Employee"} backPath={"/"} />
        <br />
        {employee && <EmployeeListItem {...employee} />}
        {!employee && "No content"}
        <br />
        mais detalhes..
      </>
    );
  }
}

const EmployeePage = ({ children, ...rest }) => {
  return (
    <EmployeeContext.Consumer>
      {({ employee }) => {
        return (
          <InnerEmployeePage {...rest} employee={employee}>
            {children}
          </InnerEmployeePage>
        );
      }}
    </EmployeeContext.Consumer>
  );
};

export default EmployeePage;
