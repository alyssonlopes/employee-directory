import React, { Component } from "react";
import EmployeeListItem from "../../components/EmployeeListItem";
import Header from "../../components/Header";
import { EmployeeContext } from "../../providers/Employee";

const InnerEmployeePage = ({ employee }) => {
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
};

const EmployeePage = ({ children, ...props }) => {
  return (
    <EmployeeContext.Consumer>
      {({ employee }) => {
        return (
          <InnerEmployeePage {...props} employee={employee}>
            {children}
          </InnerEmployeePage>
        );
      }}
    </EmployeeContext.Consumer>
  );
};

export default EmployeePage;
