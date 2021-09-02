import React, { useContext } from "react";
import EmployeeListItem from "../../components/EmployeeListItem";
import Header from "../../components/Header";
import { EmployeeContext } from "../../providers/Employee";

const EmployeePage = () => {
  const { employee } = useContext(EmployeeContext);
  return (
    <>
      <Header title={"Employee"} backPath={"/"} />
      <br />
      {employee && <EmployeeListItem {...employee} />}
      {!employee && "No content"}
    </>
  );
};

export default EmployeePage;
