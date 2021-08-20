import React from "react";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

class EmployeeListItem extends React.Component {
  static propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
  };

  render() {
    return (
      <ListItem button>
        <ListItemAvatar>
          <Avatar src={this.props.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={this.props.name}
          secondary={this.props.position}
        />
      </ListItem>
    );
  }
}

export default EmployeeListItem;
