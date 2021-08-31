import React from "react";
import EmployeeForm from "../../components/EmployeeForm";
import Header from "../../components/Header";

const RegisterEmployeePage = () => {
  return (
    <>
      <Header title={"Register Employee Page"} backPath={"/"} />
      <EmployeeForm />
    </>
  );
};

export default RegisterEmployeePage;
