import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";

class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    actionText: PropTypes.string,
    onAddAction: PropTypes.func,
    onBackAction: PropTypes.func,
  };

  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          {this.props.onBackAction && (
            <Button color="inherit" onClick={this.props.onBackAction}>
              <KeyboardArrowLeft />
            </Button>
          )}
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            {this.props.title}
          </Typography>
          {this.props.onAddAction && (
            <Button color="inherit" edge="end" onClick={this.props.onAddAction}>
              <AddIcon />
            </Button>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
