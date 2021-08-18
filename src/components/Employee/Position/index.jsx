import React from "react";
import PropTypes from "prop-types";

class Position extends React.Component {
  static propTypes = {
    position: PropTypes.string,
  };

  render() {
    return <span> {this.props.position} </span>;
  }
}

export default Position;
