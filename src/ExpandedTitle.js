import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = {
  flex: {
    flex: 1,
  },
};

const ExpandedTitle = props =>
  <Typography type="title" color="inherit" className={props.classes.flex}>
    {props.children}
  </Typography>

export default withStyles(styles)(ExpandedTitle);
