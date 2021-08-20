import React from "react";
import List from "@material-ui/core/List";
import withStyles from "@material-ui/core/styles/withStyles";

class EmployeeList extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <List component="nav" className={classes.root}>
        {this.props.children}
      </List>
    );
  }
}

const styles = (theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
});

export default withStyles(styles)(EmployeeList);
