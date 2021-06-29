import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
} from '@material-ui/core';

const TopBar = () => (
  <AppBar
    elevation={0}
  >
    <Toolbar>
      <Box flexGrow={1} />
    </Toolbar>
  </AppBar>
);

export default TopBar;
