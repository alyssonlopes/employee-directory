import React from "react";
import List from "@material-ui/core/List";
import withStyles from "@material-ui/core/styles/withStyles";

const EmployeeList = ({ classes, children }) => (
  <List component="nav" className={classes.root}>
    {children}
  </List>
);

const styles = (theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
});

export default withStyles(styles)(EmployeeList);
