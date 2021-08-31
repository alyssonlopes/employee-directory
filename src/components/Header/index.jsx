import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import { Link } from "react-router-dom";

const Header = ({ backPath, title, addPath, ...props }) => {
  return (
    <AppBar {...props} position="static">
      <Toolbar>
        {backPath && (
          <Link
            to={backPath}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <KeyboardArrowLeft />
          </Link>
        )}
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          {title}
        </Typography>
        {addPath && (
          <Link
            to={addPath}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <AddIcon />
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

Header.defaultProps = {
  title: "Employee Directory",
  addPath: null,
  backPath: null,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  addPath: PropTypes.string,
  backPath: PropTypes.string,
};

export default Header;
