import React from "react";
import PropTypes from "prop-types";

class SearchBar extends React.Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

  render() {
    return <input type="text" name="search" onChange={this.props.onSearch} />;
  }
}

export default SearchBar;
