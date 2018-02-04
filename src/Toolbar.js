import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiToolbar from 'material-ui/Toolbar';
import ExpandedTitle from './ExpandedTitle';
import MenuButton from './MenuButton';

const Toolbar = (props) =>
  <AppBar>
    <MuiToolbar>
      <MenuButton onClick={props.onMenuClick} />
      <ExpandedTitle>
        {props.title}
      </ExpandedTitle>
    </MuiToolbar>
  </AppBar>

export default Toolbar