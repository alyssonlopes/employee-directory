import React from "react";
import PropTypes from "prop-types";

class EmployeeName extends React.Component {
  static propTypes = {
    name: PropTypes.string,
  };

  render() {
    return <span> {this.props.name}</span>;
  }
}

export default EmployeeName;
