import React from "react";
import PropTypes from "prop-types";
import EmployeeAvatar from "../Employee/EmployeeAvatar";
import EmployeeName from "../Employee/EmployeeName";
import Position from "../Employee/Position";

class EmployeeListItem extends React.Component {
  static propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
  };

  render() {
    return (
      <li>
        <EmployeeAvatar url={this.props.avatar} />
        <EmployeeName name={this.props.name} />
        {" | "}
        <Position position={this.props.position} />
      </li>
    );
  }
}

export default EmployeeListItem;
