import React from "react";
import EmployeeAvatar from "../Employee/EmployeeAvatar";
import EmployeeName from "../Employee/EmployeeName";
import Position from "../Employee/Position";

class EmployeeListItem extends React.Component {
  render() {
    return (
      <li>
        <EmployeeAvatar />
        <EmployeeName />
        <Position />
      </li>
    );
  }
}

export default EmployeeListItem;
