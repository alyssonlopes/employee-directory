import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import { Link } from "react-router-dom";

class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    addPath: PropTypes.string,
    backPath: PropTypes.string,
  };

  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          {this.props.backPath && (
            <Link
              to={this.props.backPath}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <KeyboardArrowLeft />
            </Link>
          )}
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            {this.props.title}
          </Typography>
          {this.props.addPath && (
            <Link
              to={this.props.addPath}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <AddIcon />
            </Link>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
