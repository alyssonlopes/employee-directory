import React from "react";
import Form from "../../components/Employee/Form";
import Header from "../../components/Header";

class RegisterEmployeePage extends React.Component {
  render() {
    return (
      <>
        <Header titulo={"Register Employee Page"} />
        <Form />
      </>
    );
  }
}

export default RegisterEmployeePage;
