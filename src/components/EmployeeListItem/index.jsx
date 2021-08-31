import React from "react";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const EmployeeListItem = ({ avatar, name, position }) => {
  return (
    <ListItem button>
      <ListItemAvatar>
        <Avatar src={avatar} />
      </ListItemAvatar>
      <ListItemText primary={name} secondary={position} />
    </ListItem>
  );
};

EmployeeListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
};

export default EmployeeListItem;
