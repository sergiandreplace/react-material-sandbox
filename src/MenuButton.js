import React from 'react';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


const MenuButton = props =>
  <IconButton className={props.classes.menuButton} color="inherit" aria-label="Menu" onClick={props.onClick}>
    <MenuIcon />
  </IconButton>

export default withStyles(styles)(MenuButton)
