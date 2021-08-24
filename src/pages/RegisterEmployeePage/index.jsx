import React from "react";
import EmployeeForm from "../../components/EmployeeForm";
import Header from "../../components/Header";
import PropTypes from "prop-types";

class RegisterEmployeePage extends React.Component {
  static propTypes = {
    onChangePage: PropTypes.func,
  };

  render() {
    return (
      <>
        <Header title={"Register Employee Page"} backPath={"/"} />
        <EmployeeForm />
      </>
    );
  }
}

export default RegisterEmployeePage;
