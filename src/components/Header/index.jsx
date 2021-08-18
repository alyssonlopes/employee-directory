import React from "react";
import Button from "../Button";
import PropTypes from "prop-types";

class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    actionText: PropTypes.string,
    onAction: PropTypes.func,
  };

  render() {
    return (
      <header>
        <h2>{this.props.title}</h2>
        {this.props.actionText && this.props.onAction && (
          <Button onClick={this.props.onAction}>{this.props.actionText}</Button>
        )}
      </header>
    );
  }
}

export default Header;
