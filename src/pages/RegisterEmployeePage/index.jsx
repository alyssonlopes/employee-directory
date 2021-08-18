import React from "react";
import Form from "../../components/Employee/Form";
import Header from "../../components/Header";
import PropTypes from "prop-types";

class RegisterEmployeePage extends React.Component {
  static propTypes = {
    onChangePage: PropTypes.func,
  };

  render() {
    return (
      <>
        <Header
          title={"Register Employee Page"}
          actionText="Back"
          onAction={this.props.onChangePage}
        />
        <Form />
      </>
    );
  }
}

export default RegisterEmployeePage;
