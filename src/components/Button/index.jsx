import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, onClick }) => {
  return <button onClick={onClick}> {children} </button>;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
