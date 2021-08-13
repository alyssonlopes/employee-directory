import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h2>{this.props.titulo}</h2>
      </header>
    );
  }
}

export default Header;
