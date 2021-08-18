import React from "react";
import PropTypes from "prop-types";

class EmployeeAvatar extends React.Component {
  static propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
  };

  render() {
    return <img src={this.props.url} alt={this.props.title} />;
  }
}
export default EmployeeAvatar;
