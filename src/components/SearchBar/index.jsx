import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { alpha } from "@material-ui/core/styles/colorManipulator";

class SearchBar extends React.Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          type="search"
          fullWidth={true}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          onChange={this.props.onSearch}
        />
      </div>
    );
  }
}

const styles = (theme) => ({
  search: {
    position: "relative",
    backgroundColor: alpha(theme.palette.primary.main, 0.25),
    "&:hover": {
      backgroundColor: alpha(theme.palette.primary.main, 0.5),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
  },
});

export default withStyles(styles)(SearchBar);
