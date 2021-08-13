import React from "react";

class EmployeeList extends React.Component {
  render() {
    return <ul>{this.props.children}</ul>;
  }
}

export default EmployeeList;
